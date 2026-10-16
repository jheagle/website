/* global jsonDomComponents, matrixDom, jsonDom */
const {
  div,
  span,
  anchor,
  heading,
  paragraph,
  text
} = jsonDomComponents;
const columns = 4;

/**
 * A single tile's content: an icon badge plus title/description, all wrapped in one clickable link.
 * @param {{title: string, href: string, description: string}} project
 * @returns {DomItem}
 */
const tileContent = project => anchor(project.href, [div([span([text(project.title[0].toUpperCase())], 'tile-icon-letter')], 'tile-icon'), heading(3, [text(project.title)]), paragraph(project.description)], 'tile-link', {
  target: '_blank'
});

/**
 * Builds a matrix-dom grid of project tiles, one per entry in `projects`, in display order
 * (row-major: left to right, then top to bottom). Any trailing columns left over when `projects.length`
 * doesn't divide evenly into `columns` are left empty (marked 'tile-empty', hidden via CSS).
 * @param {Array<{title: string, href: string, description: string}>} projects
 * @returns {DomItem}
 */
const projectGrid = projects => {
  const rows = Math.ceil(projects.length / columns);
  const grid = matrixDom.buildMatrix({
    x: columns,
    y: rows,
    z: 1
  }, {
    matrix: {
      attributes: {
        className: 'project-grid'
      }
    },
    x: {
      attributes: {
        className: 'tile tile-empty'
      }
    }
  });
  projects.forEach((project, index) => {
    const tile = matrixDom.getDomItemFromPoint(matrixDom.point(index % columns, Math.floor(index / columns)), grid);
    tile.attributes.className = 'tile';
    jsonDom.appendChild(tile, tileContent(project));
  });
  return grid;
};
export default projectGrid;