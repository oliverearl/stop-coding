"use strict";
/**
 * StopCoding JavaScript
 * 
 * Simple script tied into a Chrome/Firefox plugin that simply
 * replaces all instances of the word 'coding' with 'programming'.
 * 
 * Because the word annoys me for no valid reason at all.
 * 
 * TODO: Allow custom word replacements.
 * 
 * @author Oliver Earl <oliver@oliverearl.co.uk>
 * @license Unlicense
 */

 /**
  * Function that carries out the Regex text replacement.
  * 
  * Horrendously.
  * @param {Node} textNode 
  */
 const handleText = function(textNode) {
     let value = textNode.nodeValue;

     // Eurgh
     value = value.replace(/\bcoding\b/g, "programming");
     value = value.replace(/\bCoding\b/g, "Programming");
     value = value.replace(/\bCODING\b/g, "PROGRAMMING");

     textNode.nodeValue = value;
 }

 /**
  * Walk function to Regex text outside of HTML attributes
  * 
  * This function was derived from the following SO:
  * https://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
  * @param {Node} node 
  */
 const walk = function(node) {
     let child, next;

     // We don't want to affect input nodes.
     if (node.tagName.toLowerCase() === 'input' 
     || node.tagName.toLowerCase() === 'textarea' 
     || node.classList.indexOf('ace_editor') > -1) {
         return;
     }

     switch(node.NodeType) {
         case 1: // Element
         case 9: // Document
         case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                // Oh you know what's coming next.
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
     }
 }

walk(document.body);
