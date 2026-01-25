import { visit } from 'unist-util-visit';

const containerTypes = ['info', 'tip', 'warning', 'danger', 'details'];

export function remarkContainer() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' &&
        containerTypes.includes(node.name)
      ) {
        const data = node.data || (node.data = {});
        const type = node.name;

        data.hName = type === 'details' ? 'details' : 'div';
        data.hProperties = {
          class: `custom-container ${type}`,
        };

        // Handle title for details
        if (type === 'details' && node.children[0]?.data?.directiveLabel) {
          const summary = node.children.shift();
          node.children.unshift({
            type: 'paragraph',
            data: {
              hName: 'summary',
            },
            children: summary.children,
          });
        }
      }
    });
  };
}

export default remarkContainer;
