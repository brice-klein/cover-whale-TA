BEGIN;

CREATE ROLE root WITH SUPERUSER;

CREATE TABLE IF NOT EXISTS users (
  id integer NOT NULL,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  remember_token varchar(100),
  company_name VARCHAR,
  company_street VARCHAR,
  company_city VARCHAR,
  company_zipcode integer,
  created_at timestamp,
  updated_at timestamp
);
CREATE TABLE IF NOT EXISTS quotes (
  id integer NOT NULL,
  dot_number integer,
  nbr_of_power_units integer,
  value_of_power_units integer,
  premium_amount integer,
  premium_tax integer,
  premium_total integer,
  street VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zipcode integer,
  driver1_name VARCHAR,
  driver1_age integer,
  driver2_name VARCHAR,
  driver2_age integer,
  driver3_name VARCHAR,
  driver3_age integer,
  driver4_name VARCHAR,
  driver4_age integer,
  driver5_name VARCHAR,
  driver5_age integer,
  created_at timestamp,
  updated_at timestamp
);
INSERT INTO users (id, name) VALUES (1, 'test-user');