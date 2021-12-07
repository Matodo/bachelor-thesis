import * as React from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";

export default () => (
  <Card>
    <CardHeader title="IT Marketing Application" />
    <CardContent>
      This is a marketing application programmed using Typescript and
      React-Admin on the frontend and running on the backend thanks to Hasura
      and PostgreSQL. It is a simple and easy-to-use app for marketers to help
      them create, store and use data about their customers and also guide them
      in the sales process.
    </CardContent>
  </Card>
);
