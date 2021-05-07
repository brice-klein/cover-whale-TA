BEGIN;

CREATE TABLE IF NOT EXISTS users (
  id integer NOT NULL,
  name string,
  email string,
  password string,
  remember_token varchar(100),
  company_name string,
  company_street string,
  company_city string,
  company_zipcode integer,
  created_at timestamp,
  updated_at timestamp
);
CREATE TABLE IF NOT EXISTS quotes (
  id integer,
  dot_number int,
  nbr_of_power_units integer,
  value_of_power_unites integer,
  premium_amount integer,
  premium_tax integer,
  premium_total integer,
  street string,
  city string,
  state string,
  zipcode integer,
  driver1_name string,
  driver1_age integer,
  driver2_name string,
  driver2_age integer,
  driver3_name string,
  driver3_age integer,
  driver4_name string,
  driver4_age integer,
  driver5_name string,
  driver5_age integer,
  created_at timestamp,
  updated_at timestamp
)