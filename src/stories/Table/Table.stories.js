import React from 'react';

import { Table } from './Table';

export default {
    title: 'Design System/Components/Table',
    component: Table
};

const dataSource = [
  {
    "id": 1,
    "name": "Carmine Queyos",
    "email": "jnckjnskjwicnwkjnckjnkn0@furl.net",
    "gender": "Female",
    "city": "La Tola",
    "address": "41 Waxwing Point",
    "company": "Pixonyx",
    "country": "Colombia",
    "key": 1
    }, {
    "id": 2,
    "name": "Rutherford Thewys",
    "email": "rthewys1@about.me",
    "gender": "Agender",
    "city": "Krajan",
    "address": "71 Thompson Pass",
    "company": "Youfeed",
    "country": "Indonesia",
    "key": 2
    }, {
    "id": 3,
    "name": "Brook Kemme",
    "email": "bkemme2@shop-pro.jp",
    "gender": "Non-binary",
    "city": "Takefu",
    "address": "80223 Arkansas Drive",
    "company": "Jaxspan",
    "country": "Japan",
    "key": 3
    }, {
    "id": 4,
    "name": "Cecilius Wishkar",
    "email": "cwishkar3@mac.com",
    "gender": "Genderqueer",
    "city": "Vizal San Pablo",
    "address": "157 Cambridge Pass",
    "company": "Flipopia",
    "country": "Philippines",
    "key": 4
    }, {
    "id": 5,
    "name": "Cori Goacher",
    "email": "cgoacher4@mit.edu",
    "gender": "Polygender",
    "city": "Panyingkiran",
    "address": "08 Forest Dale Place",
    "company": "Youfeed",
    "country": "Indonesia",
    "key": 5
    }
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sortable: true,
    align: 'left'
  },
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sortable: true,
      searchable: true,
  },
  {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sortable: true
  },
  {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sortable: true
  },
  {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sortable: true,
      searchable: true
  },
  {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
  },
  {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      sortable: true
  },
  {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sortable: true
  }
];

const customized_columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sortable: true,
    align: 'left'
  },
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sortable: true,
      searchable: true
  },
  {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sortable: true
  },
  {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      sortable: true,
      render: (text) => {
        return (
          <label>{text}</label>
        );
      }
  },
  {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      sortable: true,
      searchable: true
  },
  {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
  },
  {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      sortable: true
  },
  {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      sortable: true
  }
];

const Template = (args) => <Table {...args} />;


export const Default = Template.bind({});
Default.args = {
  dataSource: dataSource,
  columns: columns
}

export const HScroll = Template.bind({});
HScroll.args = {
  HScroll: true,
  dataSource: dataSource,
  columns: columns
};

export const WithActionBar = Template.bind({});
WithActionBar.args = {
  dataSource: dataSource,
  columns: columns,
  actionBar: true
};

export const Downloadable = Template.bind({});
Downloadable.args = {
  downloadable: true,
  dataSource: dataSource,
  columns: columns,
  actionBar: true
};

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
  dataSource: dataSource,
  columns: columns
};

export const Slim = Template.bind({});
Slim.args = {
  slim: true,
  dataSource: dataSource,
  columns: columns
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
  dataSource: dataSource,
  columns: columns
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  dataSource: dataSource,
  columns: customized_columns
};
