```MongoDB
Microsoft Windows [Version 10.0.22621.3155]
(c) Microsoft Corporation. All rights reserved.

C:\Users\siddu>mongod --version
db version v7.0.5
Build Info: {
    "version": "7.0.5",
    "gitVersion": "7809d71e84e314b497f282ea8aa06d7ded3eb205",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}

C:\Users\siddu>mongosh
Current Mongosh Log ID: 65d99f00cb8562ab522561cd
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5
Using MongoDB:          7.0.5
Using Mongosh:          2.1.5

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-02-24T12:32:19.878+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB
test> show db
MongoshInvalidInputError: [COMMON-10001] 'db' is not a valid argument for "show".
test> show databases;
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB
test> use admin;
switched to db admin
admin> use test;
switched to db test
test> use newdb;
switched to db newdb
newdb> use picollege;
switched to db picollege
picollege> db.createCollection("students");
{ ok: 1 }
picollege> show dbs;
admin       40.00 KiB
config     108.00 KiB
local       72.00 KiB
picollege    8.00 KiB
picollege> show collections;
students
picollege> db.students.renameCollection("students_new");
{ ok: 1 }
picollege> db.students.remove({});
DeprecationWarning: Collection.remove() is deprecated. Use deleteOne, deleteMany, findOneAndDelete, or bulkWrite.
{ acknowledged: true, deletedCount: 0 }
picollege> show collections;
students_new
picollege> db.students.drop;
[Function: drop] AsyncFunction {
  apiVersions: [ 1, Infinity ],
  returnsPromise: true,
  serverVersions: [ '0.0.0', '999.999.999' ],
  topologies: [ 'ReplSet', 'Sharded', 'LoadBalanced', 'Standalone' ],
  returnType: { type: 'unknown', attributes: {} },
  deprecated: false,
  platforms: [ 'Compass', 'Browser', 'CLI' ],
  isDirectShellCommand: false,
  acceptsRawInput: false,
  shellCommandCompleter: undefined,
  help: [Function (anonymous)] Help
}
picollege> db.students.drop();
true
picollege> show collections;
students_new
picollege> db.students_new.drop();
true
picollege> show collections;

picollege> documents;
ReferenceError: documents is not defined
picollege> use newdb;
switched to db newdb
newdb> var user = {
... name : "sidduganesh",
... ip : "192.168.0.1",
... lastLoginTime : 93838928834
... };

newdb> show collections;

newdb> user;
{ name: 'sidduganesh', ip: '192.168.0.1', lastLoginTime: 93838928834 }
newdb> db.students.insertOne(user);
{
  acknowledged: true,
  insertedId: ObjectId('65d9a90acb8562ab522561ce')
}
newdb> db.students.insertMany([{name:"aakashganesh", ip : "127.0.0.1"},{name: "jyothi", work:"tailoring"]);
Uncaught:
SyntaxError: Unexpected token, expected "," (1:97)

> 1 | db.students.insertMany([{name:"aakashganesh", ip : "127.0.0.1"},{name: "jyothi", work:"tailoring"]);
    |
 ^
  2 |

newdb> db.students.insertMany([{name:"aakashganesh", ip : "127.0.0.1"},{name: "jyothi", work:"tailoring"}]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65d9a9ddcb8562ab522561cf'),
    '1': ObjectId('65d9a9ddcb8562ab522561d0')
  }
}
newdb> db.students.find();
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  }
]
newdb> db.students.find({name: "jyothi"})
[
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  }
]
newdb> show dbs;
admin    40.00 KiB
config  108.00 KiB
local    72.00 KiB
newdb    72.00 KiB
newdb> var n_user = {
... name: "sid"
... job : {
Uncaught:
SyntaxError: Unexpected token, expected "," (3:0)

  1 | var n_user = {
  2 | name: "sid"
> 3 | job : {
    | ^
  4 |

newdb> var n_user = { name: "sid", job : {
... title: "programmer",
... salary: 25000};
Uncaught:
SyntaxError: Unexpected token, expected "," (3:14)

  1 | var n_user = { name: "sid", job : {
  2 | title: "programmer",
> 3 | salary: 25000};
    |               ^
  4 |

newdb> var n_user = { name: "sid", job : { title: "programmer", salary: 25000}};

newdb> db.students.insertOne(n_user);
{
  acknowledged: true,
  insertedId: ObjectId('65d9ab66cb8562ab522561d1')
}
newdb> db.students.find();
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find({'job.title' : 'programmer'});
[
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find({name: /s.*/})
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find({name: /S.*/})

newdb> db.students.find({name: /j.*/})
[
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  }
]
newdb> db.students.find().limit(2);
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  }
]
newdb> db.students.find().pretty();
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find().skip(2);
[
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find();
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> db.students.find().sort({name: 1});
[
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  },
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  }
]
newdb> db.students.find().count();
4
newdb> db.students.distinct('name');
[ 'aakashganesh', 'jyothi', 'sid', 'sidduganesh' ]
newdb> db.students.distinct('job.title');
[ 'programmer' ]
newdb> db.students.find({salary: {$lt:30000})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:37)

> 1 | db.students.find({salary: {$lt:30000})
    |                                      ^
  2 |

newdb> db.students.find({salary: {$lt: 30000}})

newdb> db.students.find({salary: {$lt: 300000}});

newdb> db.students.find({job.salary: {$lt: 300000}});
Uncaught:
SyntaxError: Unexpected token, expected "," (1:21)

> 1 | db.students.find({job.salary: {$lt: 300000}});
    |                      ^
  2 |

newdb> db.students.find({'job.salary': {$lt: 300000}});
[
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb> show dbs;
admin    40.00 KiB
config  108.00 KiB
local    72.00 KiB
newdb    72.00 KiB
newdb> db.students;
newdb.students
newdb> db.students.collections;
newdb.students.collections
newdb> db.students.find();
[
  {
    _id: ObjectId('65d9a90acb8562ab522561ce'),
    name: 'sidduganesh',
    ip: '192.168.0.1',
    lastLoginTime: 93838928834
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561cf'),
    name: 'aakashganesh',
    ip: '127.0.0.1'
  },
  {
    _id: ObjectId('65d9a9ddcb8562ab522561d0'),
    name: 'jyothi',
    work: 'tailoring'
  },
  {
    _id: ObjectId('65d9ab66cb8562ab522561d1'),
    name: 'sid',
    job: { title: 'programmer', salary: 25000 }
  }
]
newdb>
```