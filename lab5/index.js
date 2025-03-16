import PathParameters from "./path_parameters.js";
import QueryParameters from './query_parameters.js';
import WorkingWithObjects from './working_with_objects.js';
import WorkingWithArrays from './working_with_arrays.js';

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);
};