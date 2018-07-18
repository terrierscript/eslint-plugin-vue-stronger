const utils = require("eslint-plugin-vue/lib/utils")

module.exports = {
  meta: {
    docs: {
      description: "disallow use mixins"
    },
    schema: []
  },

  create(context) {
    const sourceCode = context.getSourceCode()

    return utils.executeOnVue(context, obj => {
      const mixinNode = obj.properties.find(
        p =>
          p.type === "Property" &&
          p.key.type === "Identifier" &&
          p.key.name === "mixins" &&
          p.value.type === "ArrayExpression"
      )
      if (!mixinNode) {
        return
      }
      context.report({
        node: mixinNode,
        message: "mixins is disallowed"
      })
    })
  }
}
