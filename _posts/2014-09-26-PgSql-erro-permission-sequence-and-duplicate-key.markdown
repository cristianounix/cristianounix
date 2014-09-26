---
layout: post
title: Rails, PgSql erro sequence key and erro duplicate key
description: "Solution for problems with postgres duplicate key and permission sequence"
modified: 2014-09-26
category: rails, pgsql, database
tags: [gem, ruby]
comments: true
---

## Let´s go:

Erro:
  PG::InsufficientPrivilege: ERROR:  permission denied for sequence

  GRANT SELECT, USAGE on [table]_id_seq to coursetree_prod;

Erro:
  PG::UniqueViolation: ERROR:  duplicate key value violates unique constraint

  ALTER SEQUENCE [table]_id_seq RESTART WITH 116;
