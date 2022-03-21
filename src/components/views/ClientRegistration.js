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
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const toaster = (toastId, message, type, time) => {
  switch (type) {
    case "info":
      toast.info(message, {
        position: "top-right",
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        isLoading: false,
      });
      break;
    case "error":
    case "success":
    case "warning":
      toast.update(toastId, {
        render: message,
        type,
        position: "top-right",
        autoClose: 5000,
        //delay: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        isLoading: false,
      });
      break;
    default:
      break;
  }
};

const ClientRegistration = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [submitData, setSubmitdata] = useState({});
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: false,
    allowEditOnDblClick: true,
  };

  const commandOptions = [
    {
      type: "Edit",
      buttonOption: { iconCss: " e-icons e-edit", cssClass: "e-flat" },
    },
    {
      type: "Delete",
      buttonOption: { iconCss: "e-icons e-delete", cssClass: "e-flat" },
    },
    {
      type: "Save",
      buttonOption: { iconCss: "e-icons e-update", cssClass: "e-flat" },
    },
  ];

  const handleChange = (evnt) => {
    setSubmitdata({ ...data, [evnt?.target?.name]: evnt?.target?.value });
    dispatch({
      type: "set",
      data: { ...data, [evnt?.target?.name]: evnt?.target?.value },
    });
  };

  const handleSubmitdata = () => {
    toast.info("tryyy", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      isLoading: false,
    });
    //toaster("", "Enter App ID", "info", 3000);

    return;

    if (!submitData?.appID || submitData?.appID === "") {
      toaster("", "Enter App ID", "info", 3000);
      return;
    }
    if (!submitData?.appName || submitData?.appName === "") {
      toaster("", "Enter App Name", "info", 3000);
      return;
    }

    let currentData = { ...submitData };
    console.log(currentData);
  };

  return (
    <Container style={{}}>
      <Row style={{ marginTop: "30px" }}>
        <Col md="4">
          <h3>Register Client</h3>
        </Col>
        <Col md="8" className="text-right">
          <Button
            variant="primary"
            onClick={handleShow}
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
                commands={commandOptions}
                headerText={"Action"}
                width="80"
                textAlign="Center"
              />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Edit]} />
          </GridComponent>
        </Col>
      </Row>

      <Modal
        isOpen={show}
        //onHide={handleClose}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader>Add Client</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="appID">App ID</Label>
                <Input
                  id="appID"
                  name="appID"
                  value={data?.appID || ""}
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="appName">App Name</Label>
                <Input
                  id="appName"
                  name="appName"
                  value={data.appName || ""}
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmitdata}>
            Save
          </Button>{" "}
          <Button onClick={handleClose} color="danger">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default ClientRegistration;
