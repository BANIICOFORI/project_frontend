import React from 'react'

const Items = () => {
  return (
    <div>
          <div>
      <div class="product-status mg-b-30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <h4>Products List</h4>
                            <div class="add-product">
                                <a href="product-edit.html">Add Product</a>
                            </div>
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Title</th>
                                    <th>Status</th>
                                    <th>Purchases</th>
                                    <th>Product sales</th>
                                    <th>Stock</th>
                                    <th>Price</th>
                                    <th>Setting</th>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/5-small.jpg" alt="" /></td>
                                    <td>Product Title 1</td>
                                    <td>
                                        <button class="pd-setting">Active</button>
                                    </td>
                                    <td>50</td>
                                    <td>$750</td>
                                    <td>Out Of Stock</td>
                                    <td>$15</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src="img/new-product/6-small.jpg" alt="" /></td>
                                    <td>Product Title 2</td>
                                    <td>
                                        <button class="ps-setting">Paused</button>
                                    </td>
                                    <td>60</td>
                                    <td>$1020</td>
                                    <td>In Stock</td>
                                    <td>$17</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                 <tr>
                                    <td><img src="img/new-product/7-small.jpg" alt="" /></td>
                                    <td>Product Title 3</td>
                                    <td>
                                        <button class="ds-setting">Disabled</button>
                                    </td>
                                    <td>70</td>
                                    <td>$1050</td>
                                    <td>Low Stock</td>
                                    <td>$15</td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                              
                            </table>
                            <div style={{marginBottom:"85px"}}>

                            </div>
                            <div class="custom-pagination">
								<ul class="pagination">
									<li class="page-item"><a class="page-link" href="#">Previous</a></li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">Next</a></li>
								</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
    </div>
    </div>
  )
}

export default Items
