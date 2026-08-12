\c fangform

CREATE TABLE routines (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    createdDate DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    createdDate DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE routine_exercises (
    id SERIAL PRIMARY KEY,
    routine_id INTEGER NOT NULL,
    exercise_id INTEGER NOT NULL,
    CONSTRAINT fk_routines FOREIGN KEY(routine_id) REFERENCES routines(id),
    CONSTRAINT fk_exercises FOREIGN KEY(exercise_id) REFERENCES exercises(id)
);

INSERT INTO routines (name) VALUES
    ('Overhead'),
    ('Bench'),
    ('Squat'),
    ('Deadlift');
    