import React, { useState, useEffect } from "react";
import { Admin, Resource } from "react-admin";
import PostIcon from "@material-ui/icons/AccountBox";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import HistoryIcon from "@material-ui/icons/History";
import Dashboard from "./Dashboard";
import buildHasuraProvider from "ra-data-hasura";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { CustomerEdit } from "./customerEdit";
import { CustomerShow } from "./customerShow";
import { CustomerList } from "./customerList";
import { CustomerCreate } from "./customerCreate";

import { QuestionsEdit } from "./questionsEdit";
import { QuestionsShow } from "./questionsShow";
import { QuestionsList } from "./questionsList";
import { QuestionsCreate } from "./questionsCreate";

import { TemplateEdit } from "./templateEdit";
import { TemplateShow } from "./templateShow";
import { TemplateList } from "./templateList";
import { TemplateCreate } from "./templateCreate";

import { HistoryEdit } from "./historyEdit";
import { HistoryShow } from "./historyShow";
import { HistoryList } from "./historyList";
import { HistoryCreate } from "./historyCreate";

const myClientWithAuth = new ApolloClient({
  uri: "https://bacalar-thesis.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "aDnhnhAX4CQFNFZiFJ3as592QTGL7xxaoB867K71WHuY4RRXM3kh67CkU5jsDPnj",
  },
});

buildHasuraProvider({ client: myClientWithAuth });

const App = () => {
  const [dataProvider, setDataProvider] = useState(null);

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataProvider = await buildHasuraProvider({
        client: myClientWithAuth,
      });
      setDataProvider(() => dataProvider);
    };
    buildDataProvider();
  }, []);

  if (!dataProvider) return <p>Loading...</p>;

  return (
    <Admin
      title="IT Marketing Application"
      dashboard={Dashboard}
      dataProvider={dataProvider}
    >
      <Resource
        name="Customer"
        show={CustomerShow}
        list={CustomerList}
        edit={CustomerEdit}
        create={CustomerCreate}
        icon={PostIcon}
      />
      <Resource
        name="Questions"
        show={QuestionsShow}
        list={QuestionsList}
        edit={QuestionsEdit}
        create={QuestionsCreate}
        icon={QuestionAnswerIcon}
      />
      <Resource
        name="Template"
        show={TemplateShow}
        list={TemplateList}
        edit={TemplateEdit}
        create={TemplateCreate}
      />
      <Resource
        name="History"
        options={{ label: "History" }}
        show={HistoryShow}
        list={HistoryList}
        edit={HistoryEdit}
        create={HistoryCreate}
        icon={HistoryIcon}
      />
    </Admin>
  );
};

export default App;
