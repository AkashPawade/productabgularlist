package com.prog.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="product")
public class Product {
	
	@Id
	@Column(name="id")
	private int productId;
	
	@Column(name="sku")
	private String sku;
	
	@Column(name="name")
	private String name;
	
	@Column(name="description")
	private String description;
	
	@Column(name="unitprice")
	private int unitprice;
	
	@Column(name="imageurl")
	private String imageurl;
	
	@Column(name="unitsinstock")
	private int unitsInStrock;
	
	@Column(name="datecreated")
	private Date dateCreated;
	
	@Column(name="lastupdated")
	private Date lastUpdated;
	
	@Column(name="categoryid")
	private int  categoryId;

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getUnitprice() {
		return unitprice;
	}

	public void setUnitprice(int unitprice) {
		this.unitprice = unitprice;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public int getUnitsInStrock() {
		return unitsInStrock;
	}

	public void setUnitsInStrock(int unitsInStrock) {
		this.unitsInStrock = unitsInStrock;
	}

	public Date getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(Date dateCreated) {
		this.dateCreated = dateCreated;
	}

	public Date getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(Date lastUpdated) {
		this.lastUpdated = lastUpdated;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public Product(int productId, String sku, String name, String description, int unitprice, String imageurl,
			int unitsInStrock, Date dateCreated, Date lastUpdated, int categoryId) {
		super();
		this.productId = productId;
		this.sku = sku;
		this.name = name;
		this.description = description;
		this.unitprice = unitprice;
		this.imageurl = imageurl;
		this.unitsInStrock = unitsInStrock;
		this.dateCreated = dateCreated;
		this.lastUpdated = lastUpdated;
		this.categoryId = categoryId;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	
	
	
	

}
