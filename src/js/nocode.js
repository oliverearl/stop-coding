"use strict";
import "../sass/style.scss";
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
const replace = function (textNode) {
    let value = textNode.nodeValue;

    // I know this is messy. I was experimenting with doing it using 
    // arrays and maybe Regexp but I got lazy and wanted it to work
    // TODO: Replace this awful code smell

    value = value.replace(/\bcoding\b/g, "programming");
    value = value.replace(/\bCoding\b/g, "Programming");
    value = value.replace(/\bCODING\b/g, "PROGRAMMING");

    value = value.replace(/\bcoder\b/g, "programmer");
    value = value.replace(/\bCoder\b/g, "Programmer");
    value = value.replace(/\bCODER\b/g, "PROGRAMMER");

    value = value.replace(/\bcoded\b/g, "programmed");
    value = value.replace(/\bCoded\b/g, "Programmed");
    value = value.replace(/\bCODED\b/g, "PROGRAMMED");


    value = value.replace(/\bcodes\b/g, "programs");
    value = value.replace(/\bCodes\b/g, "Programs");
    value = value.replace(/\bCODES\b/g, "PROGRAMS");
    
    textNode.nodeValue = value;
}

/**
 * Walk function to Regex text outside of HTML attributes
 * 
 * This function was derived from the following SO:
 * https://stackoverflow.com/questions/5904914/javascript-regex-to-replace-text-not-in-html-attributes/5904945#5904945
 * @param {Node} node 
 */
const walk = function (node) {
    let child, next;

    // We don't want to affect input nodes, or error on null/undefined
    if (node === null ||
        node === undefined ||
        node.nodeName.toLowerCase() == 'input' ||
        node.nodeName.toLowerCase() == 'textarea' ||
        (node.classList && node.classList.contains('ace_editor'))) {
        return;
    }

    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                // Recursion is fun
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            replace(node);
            break;
        default:
            break;
    }
}

walk(document.body);
