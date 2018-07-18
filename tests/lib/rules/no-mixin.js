const rule = require("../../../lib/rules/no-mixin")
const RuleTester = require("eslint").RuleTester

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: "module"
  }
})

tester.run("no-mixin", rule, {
  valid: [
    {
      filename: "somefile.vue",
      code: `<script></script>`
    },
    {
      code: `
        new Vue({
          data: {
            _foo: String
          }
        })`
    },
    {
      code: `
        const anotherObject = {
          mixins: ["foo"]
        }`
    }
  ],
  invalid: [
    {
      filename: "test.vue",
      code: `<script>
      import someMixin from "./someMixin"
      export default {
        mixins: [someMixin]
      }
      </script>
    `,
      errors: [
        {
          message: "mixins is disallowed",
          line: 4
        }
      ]
    },
    {
      code: `
      import someMixin from "./someMixin"
      new Vue({
        mixins: [someMixin]
      })
      `,
      errors: [
        {
          message: "mixins is disallowed",
          line: 4
        }
      ]
    }
    // {
    //   code: `
    //   import someMixin from "./someMixin"
    //   const vueOption = {
    //     mixins: [someMixin]
    //   }
    //   new Vue(vueOption)
    //   `,
    //   errors: [

    //   ]
    // }
  ]
})
