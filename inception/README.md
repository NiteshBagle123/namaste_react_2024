# parcel
- Dev build
- Local server
- HMR (hot module replacement)
- File watching algorithm which is written in c++ language
- Faster builds by caching
- Image optimization
- Minification of file
- Bundling the code
- File compression
- Consistent hashing
- Code Splitting
- Differential bundling (support older browsers)
- Diagnostic (debugging capabilities with beutiful error)
- Error Handling
- https
- Tree shaking algorithm - remove unused code
- Bundle different for dev and prod

# Config driven UI
- UI driven by api data structure
- As api structure changes then UI rendered accordingly

# React details
- React element is object
- When we render it to dom it become html element from react html
- JSX --> Javascript syntax for creating react element (html/xml like syntax)
- Tranpilation of code done by babel which is kind of cabinet of parcel
- JSX(babel transpiles to) --> react element --> html dom element

# Type of export/import
- Name export (export const test / import { test })
- Default export (export default const test / import test)

# Components rendering
- When state variable changes react will rerender component.

# React fiber
- When rendering of components happens then virtual dom created.
- Virtual dom is reprentation of actual dom
- Reconciliation which also call as react fiber which react uses to update actual dom.
- Diff algorithm react uses to update actual dom.
- React is fast because it uses diff algorithm to update actual dom which is very fast.

# Routing
- Server side routing (network call for facing page)
- Client side routing (loads the component on UI and network call we are not making) For example - SPA (Single Page Application).