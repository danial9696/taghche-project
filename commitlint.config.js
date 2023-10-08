// * About config-conventional: "https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional"

// * Cheatsheet: "https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index"

/* This is a configuration file for commitlint, a tool used to enforce consistent commit message
formatting in a project. The file sets several rules for commit messages, such as the maximum length
of the header and body, the required case for the body, and the allowed types of commits. The
severity of each rule is also specified, with some rules issuing warnings and others issuing errors.
The configuration file is exported using `module.exports` so that it can be used by commitlint. */

/**
 * * The first value is a number that expresses the severity of the rule:
  0: the rule is disabled;
  1: show a warning;
  2: it’s an error.
 */

/**
 * <type>(<scope?>): <subject!>
  <BLANK LINE>
  <body?>
  <BLANK LINE>
  <footer?>
*/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    /* `'This is a rule for commitlint that sets the maximum length of
    the commit message header to 52 characters. When the rule should be applied (always), and the maximum length allowed
    (52). This means that if a commit message header exceeds 52 characters, commitlint will issue a
    warning. */
    'header-max-length': [1, 'always', 52],

    /* `'body-case': This is a rule for commitlint that sets the required case
    for the commit message body. The first value `2` expresses the severity of the rule, which is an
    error. The second value `'always'` specifies that the rule should always be applied. The third value
    `'sentence-case'` specifies that the commit message body should be in sentence case, meaning that
    the first letter of the first word should be capitalized and the rest of the words should be in
    lowercase, except for proper nouns and acronyms. If the commit message body does not follow this
    format, commitlint will issue an error. */
    'body-case': [2, 'always', 'sentence-case'],

    /* `'body-max-line-length': This is a rule for commitlint that sets the maximum length of
    each line in the commit message body to 72 characters. The first value `1` expresses the severity of
    the rule, which is a warning. The second value `'always'` specifies that the rule should always be
    applied. The third value `72` specifies the maximum length allowed for each line in the commit
    message body. This means that if a line in the commit message body exceeds 72 characters, commitlint
    will issue a warning. */
    'body-max-line-length': [1, 'always', 72],

    /* `'body-leading-blank': This is a rule for commitlint that sets the requirement for a blank
    line between the commit message header and body. The first value `2` expresses the severity of the
    rule, which is an error. The second value `'always'` specifies that the rule should always be
    applied. This means that if there is no blank line between the commit message header and body,
    commitlint will issue an error. */
    'body-leading-blank': [2, 'always'],

    /* `'footer-leading-blank': This is a rule for commitlint that sets the requirement for a
    blank line between the commit message body and footer. The first value `2` expresses the severity of
    the rule, which is an error. The second value `'always'` specifies that the rule should always be
    applied. This means that if there is no blank line between the commit message body and footer,
    commitlint will issue an error. */
    'footer-leading-blank': [2, 'always'],

    /* `'type-enum'` is a rule for commitlint that sets the allowed types of commits in a project. The
    first value `2` expresses the severity of the rule, which is an error. The second value `'always'`
    specifies that the rule should always be applied. The third value is an array of allowed commit
    types, which includes `'build'`, `'change'`, `'chore'`, `'ci'`, `'config'`,`'deprecate'`, `'docs'`, `'feat'`,
    `'fix'`, `'perf'`, `'refactor'`, `'remove'`, `'revert'`, `'security'`, `'style'`, and `'test'`.
    This means that if a commit message does not have one of these types, commitlint will issue an
    error. */
    'type-enum': [
      2,
      'always',
      [
        'build',
        'change',
        'chore',
        'ci',
        'config',
        'deprecate',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'remove',
        'revert',
        'security',
        'style',
        'test',
        'translation',
        'changeset',
      ],
    ],
  },
};
