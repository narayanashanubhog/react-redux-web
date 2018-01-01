**How it Works**

editor first looks for the ${EDITOR} environment variable. If set, it uses the value as-is, without fallbacks.

If no $EDITOR is set, editor will search through a list of known editors, and use the first one that exists on the system.

For example, on Linux, editor will look for the following editors in order:

vim
emacs
nano
heroku test
