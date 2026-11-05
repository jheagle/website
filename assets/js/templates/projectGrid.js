/* global jsonDomComponents, matrixDom, jsonDom */
const { div, span, anchor, heading, paragraph, text } = jsonDomComponents

const columns = 4

// Styling is all Tailwind classes. The plain names in front (project-grid, tile, tile-empty, tile-link,
// tile-icon-letter) are hooks the tests use to find things; no CSS targets them.
const classes = {
  grid: 'project-grid',
  // matrix-dom's layer drives the layout; its rows step aside (display: contents) so the tiles flow into a
  // responsive grid however many columns the matrix was built with
  layer: 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  row: 'contents',
  emptyTile: 'tile tile-empty invisible',
  tile: 'tile rounded-lg border border-rule bg-foreground/4 transition duration-150 hover:-translate-y-1 hover:border-accent hover:shadow-lg focus-within:border-accent motion-reduce:transition-none motion-reduce:hover:translate-y-0',
  link: 'tile-link block h-full p-4 text-foreground no-underline',
  icon: 'flex size-10 items-center justify-center rounded-full bg-accent',
  letter: 'tile-icon-letter font-heading text-lg font-bold text-background',
  title: 'mt-3 mb-1 text-lg',
  description: 'm-0 text-sm/relaxed text-muted'
}

/**
 * A single tile's content: an icon badge plus title/description, all wrapped in one clickable link.
 * @param {{title: string, href: string, description: string}} project
 * @returns {DomItem}
 */
const tileContent = project => anchor(
  project.href,
  [
    div([span([text(project.title[0].toUpperCase())], classes.letter)], classes.icon),
    heading(3, [text(project.title)], classes.title),
    paragraph(project.description, [], classes.description)
  ],
  classes.link,
  { target: '_blank' }
)

/**
 * Builds a matrix-dom grid of project tiles, one per entry in `projects`, in display order
 * (row-major: left to right, then top to bottom). Any trailing columns left over when `projects.length`
 * doesn't divide evenly into `columns` are left empty (marked 'tile-empty', and `invisible`).
 * @param {Array<{title: string, href: string, description: string}>} projects
 * @returns {DomItem}
 */
const projectGrid = projects => {
  const rows = Math.ceil(projects.length / columns)
  const grid = matrixDom.buildMatrix(
    { x: columns, y: rows, z: 1 },
    {
      matrix: { attributes: { className: classes.grid } },
      z: { attributes: { className: classes.layer } },
      y: { attributes: { className: classes.row } },
      x: { attributes: { className: classes.emptyTile } }
    }
  )
  projects.forEach((project, index) => {
    const tile = matrixDom.getDomItemFromPoint(matrixDom.point(index % columns, Math.floor(index / columns)), grid)
    tile.attributes.className = classes.tile
    jsonDom.appendChild(tile, tileContent(project))
  })
  return grid
}

export default projectGrid
