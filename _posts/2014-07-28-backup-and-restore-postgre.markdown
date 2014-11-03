---
layout: post
title:  "Backup and Restore Postgre Database"
date:   2014-07-28 15:17:21
---


## Backup Database

  $ pg_dump db_name > db_backup.pg

## restore database

  $ psql db_name < db_backup.pg


## Backup one table

  $ pg_dump --data-only --table=tablename sourcedb > onetable.pg

## Restore Data

  $ cat table_backup.pg | psql database


Obs: use postgres user !

