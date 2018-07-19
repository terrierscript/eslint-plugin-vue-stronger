/**
 * @fileoverview Disallow filters
 * @author terrierscript
 */
"use strict"
const utils = require("eslint-plugin-vue/lib/utils")

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Disallow filters",
      category: "",
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VExpressionContainer[expression!=null]"(node) {
        if(!node.expression){
          return 
        }
        if(!node.expression.operator === '|'){
          return
        }
        context.report({
          node: node,
          message: "Don't use filter"
        })
      }
    })
  }
}
