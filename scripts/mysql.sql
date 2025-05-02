CREATE DATABASE IF NOT EXISTS fostron;

USE fostron;

BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS sequences(

);

CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(10) UNIQUE NOT NULL, -- Short department code
    region_code CHAR(3) NOT NULL,
    parent_department_id INTEGER REFERENCES departments(department_id)
);

CREATE TABLE branches (
    branch_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    region_code CHAR(3) NOT NULL,
    department_id INTEGER REFERENCES departments(department_id)
);

CREATE TABLE roles (
    role_id INTEGER PRIMARY KEY AUTOINCREMENT,
    role_name VARCHAR(30) UNIQUE NOT NULL, -- 'superuser', 'educator', 'student', 'guest'
    description TEXT,
    permission_level INTEGER NOT NULL CHECK (permission_level BETWEEN 0 AND 100)
);

CREATE TABLE users (
    user_id VARCHAR(36) PRIMARY KEY, -- UUID format
    username VARCHAR(50) UNIQUE NOT NULL,
    profile_pic VARCHAR(50),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    region_code CHAR(3) NOT NULL, -- For future sharding (ISO alpha-3)
    department_id INTEGER REFERENCES departments(department_id)
);

CREATE TABLE user_roles (
    user_id VARCHAR(36) REFERENCES users(user_id) ON DELETE CASCADE,
    role_id INTEGER REFERENCES roles(role_id) ON DELETE CASCADE,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    assigned_by VARCHAR(36) REFERENCES users(user_id),
    PRIMARY KEY (user_id, role_id)
);