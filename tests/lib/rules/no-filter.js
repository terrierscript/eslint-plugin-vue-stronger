/**
 * @fileoverview Disallow filters
 * @author terrierscript
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-filter")
const RuleTester = require("eslint").RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  }
})
tester.run("no-filter", rule, {
  valid: [
    {
      code: "<template><span>{{capitalize(message)}}</span></template>"
    }
    // give me some code that won't trigger a warning
  ],
  invalid: [
    {
      code: "<template><span>{{ msg | capitalize }}</span></template>",
      errors: [
        {
          message: "Don't use filter"
        }
      ]
    }
  ]
})
