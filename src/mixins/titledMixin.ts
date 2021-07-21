import { isString } from 'lodash';

const titledMixin = {
  computed: {
    elementTitle() {
      if (this.title && isString(this.title)) return this.title;

      switch (this.$options.name) {
        case 'CrudSearch':
          return this.action.config.searchTitle;
        case 'CrudCreate':
          return this.action.config.createTitle;
        case 'CrudRead':
          return this.action.config.readTitle;
        case 'CrudUpdate':
          return this.action.config.editTitle;
      }
    },
  },
};

export default titledMixin;

export const titledMixinProps = {
  title: { type: [Boolean, String], default: false },
};
