define(`upcase', `translit(`$*', `a-z', `A-Z')')
define(`downcase', `translit(`$*', `A-Z', `a-z')')
define(`_capitalize',
       `regexp(`$1', `^\(\w\)\(\w*\)',
               `upcase(`\1')`'downcase(`\2')')')
define(`capitalize', `patsubst(`$1', `\w+', `_$0(`\&')')')