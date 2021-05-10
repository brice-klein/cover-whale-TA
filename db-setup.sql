CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id uuid NOT NULL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT,
  remember_token TEXT,
  company_name TEXT,
  company_street TEXT,
  company_city TEXT,
  company_zipcode TEXT,
  created_at timestamp,
  updated_at timestamp
);
CREATE TABLE IF NOT EXISTS quotes (
  id uuid NOT NULL PRIMARY KEY,
  user_id uuid REFERENCES users(id),
  dot_number integer,
  nbr_of_power_units integer,
  value_of_power_units integer,
  premium_amount integer,
  premium_tax integer,
  premium_total integer,
  street TEXT,
  city TEXT,
  state TEXT,
  zipcode TEXT,
  driver1_name TEXT,
  driver1_age integer,
  driver2_name TEXT,
  driver2_age integer,
  driver3_name TEXT,
  driver3_age integer,
  driver4_name TEXT,
  driver4_age integer,
  driver5_name TEXT,
  driver5_age integer,
  created_at timestamp,
  updated_at timestamp
);