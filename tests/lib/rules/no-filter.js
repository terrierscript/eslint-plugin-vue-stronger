/**
 * @fileoverview Disallow filters
 * @author terrierscript
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-filter"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-filter", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "{{ message | capitalize }}",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
