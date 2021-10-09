package com.ubosque.DTO;

public class Productos {
	int codigoProducto;
	String nombreProducto;
	int nitproveedor;
	double precioCompra;
	double ivaventa;
	double precioVenta;
	
	public Productos() {
		
	}
	// comentario
	public Productos(int codigoProducto, String nombreProducto, int nitproveedor, double precioCompra,
			double ivacompra, double precioVenta) {
		super();
		this.codigoProducto = codigoProducto;
		this.nombreProducto = nombreProducto;
		this.nitproveedor = nitproveedor;
		this.precioCompra = precioCompra;
		this.ivaventa = ivacompra;
		this.precioVenta = precioVenta;
	}
	public int getCodigoProducto() {
		return codigoProducto;
	}
	public void setCodigoProducto(int codigoProducto) {
		this.codigoProducto = codigoProducto;
	}
	public String getNombreProducto() {
		return nombreProducto;
	}
	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}
	public int getNitproveedor() {
		return nitproveedor;
	}
	public void setNitproveedor(int nitproveedor) {
		this.nitproveedor = nitproveedor;
	}
	public double getPrecioCompra() {
		return precioCompra;
	}
	public void setPrecioCompra(double precioCompra) {
		this.precioCompra = precioCompra;
	}
	public double getIvaventa() {
		return ivaventa;
	}
	public void setIvaventa(double ivacompra) {
		this.ivaventa = ivacompra;
	}
	public double getPrecioVenta() {
		return precioVenta;
	}
	public void setPrecioVenta(double precioVenta) {
		this.precioVenta = precioVenta;
	}
	
	
}
