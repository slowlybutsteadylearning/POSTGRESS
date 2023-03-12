

CREATE TABLE faizol (
    id SERIAL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO
    faizol (name, email, password, phone)
VALUES (
    'segun',
    'yuwru3733@gmail.com',
    'dsf@yahoo.com',
    '46427y4767844'
);

INSERT INTO
    faizol (name, email, password, phone)
VALUES (
    'segn',
    'ru3733@gmail.com',
    'adsf@yahoo.com',
    '6427y4767844'
);