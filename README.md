# pulsar-ide-zig package

Barebones language support for zig via `zls`, to get special features you will want to pair it with another package (see bottom of readme).

## Installation
1. Install from the
[Pulsar package repository](https://web.pulsar-edit.dev/packages/pulsar-ide-zig).  
2. Download the
[most recent stable release of `zls`](https://github.com/zigtools/zls/releases/latest)  
3. Ensure that you extract `zls` to a known location and either add it to your
`PATH` or specify the full path in this package's settings.
4. Reload the window
(CTRL + SHIFT + F5 by default, or the **Window: Reload** command.)
or relaunch Pulsar.

## Additional Packages
----------------------
*List from
[savetheclocktower](https://github.com/savetheclocktower/)
in [pulsar-ide-d](https://github.com/savetheclocktower/pulsar-ide-d)*

### Preferred

Start with these packages; they’re all builtin, actively maintained, and/or built exclusively for Pulsar:

* `autocomplete-plus` _(builtin; no installation needed)_
  * See autocompletion options as you type
* `symbols-view` _(builtin; no installation needed)_
  * View and filter a list of symbols in the current file
  * View and filter a list of symbols across all files in the project
  * Jump to the definition of the symbol under the cursor
* [linter](https://web.pulsar-edit.dev/packages/linter) and [linter-ui-default](https://web.pulsar-edit.dev/packages/linter-ui-default)
  * View diagnostic messages as you type
* [intentions](https://web.pulsar-edit.dev/packages/intentions)
  * Open a menu to view possible code actions for a diagnostic message
  * Open a menu to view possible code actions for the file at large
* [pulsar-outline-view](https://web.pulsar-edit.dev/packages/pulsar-outline-view)
  * View a hierarchical list of the file’s symbols
* [pulsar-refactor](https://web.pulsar-edit.dev/packages/pulsar-refactor)
  * Perform project-wide renaming of variables, methods, classes and types
* [pulsar-find-references](https://web.pulsar-edit.dev/packages/pulsar-find-references)
  * Place the cursor inside of a token to highlight other usages of that token
  * Place the cursor inside of a token, then view a `find-and-replace`-style “results” panel containing all usages of that token across your project

### Other

For other features that don’t have equivalents above, the legacy `atom-ide` packages should also work:

* [atom-ide-definitions](https://web.pulsar-edit.dev/packages/atom-ide-definitions)
  * Jump to the definition of the symbol under the cursor
* [atom-ide-outline](https://web.pulsar-edit.dev/packages/atom-ide-outline)
  * View a hierarchical list of the file’s symbols
  * View the call hierarchy for a given file
* [atom-ide-datatip](https://web.pulsar-edit.dev/packages/atom-ide-datatip)
  * Hover over a symbol to see any related documentation, including method signatures
* [atom-ide-signature-help](https://web.pulsar-edit.dev/packages/atom-ide-signature-help)
  * View a function’s parameter signature as you type its arguments
* [atom-ide-code-format](https://web.pulsar-edit.dev/packages/atom-ide-code-format)
  * Invoke on a buffer (or a subset of your buffer) to reformat your code according to the language server’s settings
