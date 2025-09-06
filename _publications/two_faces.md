---
title: "Paper Title Number 1"
collection: publications
category: manuscripts
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
date: 2009-10-01
venue: 'Journal 1'
slidesurl: 'http://academicpages.github.io/files/slides1.pdf'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
bibtexurl: 'http://academicpages.github.io/files/bibtex1.bib'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
---
```python
import random
while True:
    side= (input('Ha Ha Ha, Batman i finlly catched you now lets see what your final destination will be pick a side...  ')).lower()
    coin = random.choice(["head", "tail"])
   
    if side not in ["head", "tail"] : 
        print('i said pick a side $%#@!')
        continue

    elif coin == side:
        print('Dammit Batman i guess i will have to free you, now go!')
    else:
        print('Bang!!!')
