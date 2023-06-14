#!/bin/bash

[ -z "$1" ] && {
    echo "Usage: ./mkblog.sh slug-name"
    echo "You always want to run this on a branch."
    exit 1
}

SLUG=$1

BRANCH=$(git branch --show-current)

[ $? -ne 0 ] || [ -z "$BRANCH" ] || [ "$BRANCH" == "main" ] && {
    echo "Could not determine current branch, or current branch is main."
    echo "This script must be run on a branch that is NOT main."
    exit 1
}

echo "Ok! We can run on ${BRANCH} - setting up everything for ${SLUG} ..."

OUTPUT_PATH="`date +%Y-%m-%d`-${SLUG}"

echo "Path will be ${OUTPUT_PATH}"

mkdir -p blog/${OUTPUT_PATH}
mkdir -p static/img/blog/${SLUG}

cat << EOF > blog/${OUTPUT_PATH}/index.mdx
---
slug: ${SLUG}
title: A Title Case Title
description: A short, two-sentence-max description of the content (for SEO and eventual search)
authors: [tpost]
image: /img/blog/${SLUG}/${SLUG}-og.png
tags: [tag1, tag2]
---

Introductory paragraph goes here.

<a href="/blog/${SLUG}/#more">
    <img 
        src="/img/blog/${SLUG}/${SLUG}-og.png" 
        className="blogImage" 
        title="A witty title for anyone curious enough to hover"
        alt="Creative depiction of [explanation here]"    
    />
</a>

One more line before the preview is snipped.

<!--truncate-->

<p class="margin-top--md margin-bottom--md"><a id="more">&nbsp;</a>--</p>

Begin here where you left off in the intro.

EOF

echo "Process completed. Edit blog/${OUTPUT_PATH}/index.mdx"
