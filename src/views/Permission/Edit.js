import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Input,
  Label,
  Row,
  Button, Modal, ModalBody, ModalFooter, ModalHeader,
} from 'reactstrap';
import axioApi from './../../config/axioConfig';
import configUrl from './../../config/configUrl';
import qs from 'qs';
import CreatableSelect from 'react-select/lib/Creatable';

let $this;
class Create extends Component {
  constructor(props) {
      super(props); 
      this.toggle = this.toggle.bind(this);
      this.toggleFade = this.toggleFade.bind(this);
      this.toggle = this.toggle.bind(this);
      this.togglePrimary = this.togglePrimary.bind(this);
      this.state = {
        collapse: true,
        fadeIn: true,
        timeout: 300,
        primary: false,
        modal: false,
        name : '', description : '', tags : [], alltags : [], 
        author : '', imagePath: '', selectedFile: null,
        _id: null,
        gallerys: [],
        listCatProduct: [],
        parent_id: '',
        path: '',
        keyname: '',
      };
      $this = this;
  }

  toggle() {
    $this.setState({ collapse: !$this.state.collapse });
  }

  toggleFade() {
    $this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  //Hien thi modal primary
  togglePrimary() {
    this.showAllImage();
    this.setState({
      primary: !this.state.primary,
    });
  }
  //setup send data to serve
changeName(e){
    $this.setState({ name : e.target.value });
}
changeKeyname(e){
  $this.setState({ keyname : e.target.value });
}
changePath(e){
  $this.setState({ path : e.target.value });
}
changeDescription(e){
  $this.setState({ description : e.target.value });
}
changeParentId(e) {
    $this.setState({ parent_id : e.target.value });
}
componentDidMount(){
  axioApi.get('/api/permission/show/'+$this.props.match.params.id).then((res) => {
    if(res.data.parent_id){
      $this.setState({
        parent_id: res.data.parent_id._id
      });
    }else{
      $this.setState({
        parent_id: null
      });
    }
    $this.setState({
        _id: res.data._id,
        name: res.data.name,
        description: res.data.description,
        path: res.data.path,
        keyname: res.data.keyname
    });
  });
  this.showAllImage();
  this.getAllImage();
  this.getListCat();
}
getListCat(){
  axioApi.get('/api/permission/getAll').then((res) => {
    $this.setState({
      listCatProduct: res.data
    })
  });
}
tabRowsListCat(){
  return $this.state.listCatProduct.map(function(post){
    if(post._id==$this.state.parent_id){
      return <option value={post._id} data-parent={$this.state.parent_id} selected>
      { post.name }
      </option>
    }else{
      return <option value={post._id} data-parent={$this.state.parent_id}>
      { post.name }
      </option>
    }
  });
}

savePost(){
  var postdata = {
    name: $this.state.name,
    description: $this.state.description,
    keyname: $this.state.keyname,
    path: $this.state.path,
    parent_id: $this.state.parent_id,
  }
  axioApi.post('/api/permission/update/'+$this.state._id,postdata).then((res) => {
    $this.props.history.push('/permission/index');
  });
}
//upload image
getAllImage(){
  axioApi.get('/api/gallery/getAll').then((res) => {
      $this.setState({
          gallerys : res.data
      });
  });
}
getIdImage(id){
  axioApi.get('/api/gallery/show/'+id).then((res) => {
    console.log(res.data);
    $this.setState({
      imageNumber: res.data._id,
      imagePath: res.data.path
    });
  });
}
imageNumbers(){
  if($this.state.imageNumber!=''){
    return <input name='imageNumber' className="hidden" value={$this.state.imageNumber}/>;
  }else{
    return '';
  }
}
imagePath(){
  if($this.state.imagePath!=''){
    return <img src={configUrl.baseURL+$this.state.imagePath}/>;
  }else{
    return '';
  }
}
showAllImage(){
  return $this.state.gallerys.map(function(post, i){
      return <Col xs="6" sm="3" className="text-center flol">
      <div color="divItemImage warning">
        <img className="img100" src={configUrl.baseURL+post.path} data-path={post.path} data-id={post._id}
         onClick={(e) => $this.getIdImage(post._id)}/>
      </div>
      <div className="clearfix"></div>
      <Label>{post.name}</Label>
    </Col>
  });
}
getListCat(){
  axioApi.get('/api/permission/getAll').then((res) => {
    $this.setState({
      listCatProduct: res.data
    })
  });
}
render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Thêm danh mục</strong>
                <button onClick={this.savePost} className="btn btn-sm btn-primary flor">Cập nhật</button>
              </CardHeader>
              <CardBody>
                <div className="form-group">
                  <Label htmlFor="name"><strong>Tên quyền hạn</strong></Label>
                  <Input type="text" value={$this.state.name} onChange={this.changeName} id="name" placeholder="Tên quyền hạn" />
                </div>
                <div className="form-group">
                  <Label htmlFor="parent_id">Nhóm quyền hạn</Label>
                  <select className="form-control" name="parent_id" onChange={this.changeParentId}>
                    <option value="">Nhóm quyền hạn</option>
                    {this.tabRowsListCat()}
                  </select>
                </div>
                <div className="form-group">
                  <Label htmlFor="keyname"><strong>Ký hiệu quyền hạn</strong></Label>
                  <Input type="text" value={$this.state.keyname} onChange={this.changeKeyname} id="keyname" placeholder="Ký hiệu quyền hạn" />
                </div>
                <div className="form-group">
                  <Label htmlFor="path"><strong>Đường dẫn</strong></Label>
                  <Input type="text" value={$this.state.path} onChange={this.changePath} id="path" placeholder="Đường dẫn" />
                </div>
                <div className="form-group">
                  <Label htmlFor="description"><strong>Mô tả</strong></Label>
                  <Input type="textarea" value={$this.state.description} onChange={this.changeDescription} name="description" id="description"
                        placeholder="Mô tả" rows="3"/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
              className={'modal-primary modal-lg ' + this.props.className}>
        <ModalHeader toggle={this.togglePrimary}>
          <button className="buttonUploadImage">
            Tải ảnh
            <input type="file" name="file" onChange={this.onChangeHandler}/>
          </button>
          
        </ModalHeader>
        <ModalBody>
         {this.showAllImage()}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.togglePrimary}>Cập nhật</Button>
          <Button color="secondary" onClick={this.togglePrimary}>Bỏ qua</Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}
export default Create;
