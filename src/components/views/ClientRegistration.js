import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Container,
  Label,
  Input,
  FormGroup,
} from "reactstrap";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  Inject,
  Page,
  Sort,
  Edit,
  //CommandColumn
} from "@syncfusion/ej2-react-grids";

const ClientRegistration = () => {
  const [show, setShow] = useState(false);

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: false,
    allowEditOnDblClick: true,
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container style={{}}>
      <Row style={{ marginTop: "30px" }}>
        <Col md="4">
          <h3>Register Client</h3>
        </Col>
        <Col md="8" className="text-right">
          <Button
            color="primary"
            onClick={() => setShow(true)}
            style={{ float: "right" }}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md="12">
          <GridComponent
            dataSource={{}}
            allowPaging={true}
            pageSettings={{ pageSize: 6 }}
            editSettings={editOptions}
          >
            <ColumnsDirective>
              <ColumnDirective
                field={"id"}
                headerText={"ID"}
                width="100"
                visible={false}
              />
              <ColumnDirective
                field={"appID"}
                headerText="App ID"
                width="100"
              />
              <ColumnDirective
                field={"appName"}
                headerText="App Name"
                width="100"
              />
              <ColumnDirective
                field={"status"}
                headerText="Status"
                width="100"
              />
              <ColumnDirective
                field={"actions"}
                headerText="Actions"
                width="100"
              />
              {/* <ColumnDirective commands={commandOptions} headerText={"Action"} width='100' textAlign="Center" /> */}
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Edit]} />
          </GridComponent>
        </Col>
      </Row>

      <Modal isOpen={show} size="lg">
        <ModalHeader>Add Client</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="appID">Email</Label>
                <Input
                  id="appID"
                  name="App ID"
                  //placeholder="with a placeholder"
                  type="text"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">App Name</Label>
                <Input
                  id="appName"
                  name="App Name"
                  //placeholder="with a placeholder"
                  type="appName"
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Save
          </Button>{" "}
          <Button onClick={() => setShow(false)} color="danger">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ClientRegistration;
