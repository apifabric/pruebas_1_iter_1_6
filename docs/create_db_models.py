# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Customer(Base):
    """description: This table stores information about customers."""
    __tablename__ = 'customers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)

class Product(Base):
    """description: This table stores information about products available in the fruit store."""
    __tablename__ = 'products'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class Order(Base):
    """description: This table records customer orders."""
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    order_date = Column(DateTime, default=datetime.datetime.now, nullable=False)

class OrderDetail(Base):
    """description: This table stores details of each product within an order."""
    __tablename__ = 'order_details'
    id = Column(Integer, primary_key=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey('orders.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class Supplier(Base):
    """description: This table stores information about different suppliers of products."""
    __tablename__ = 'suppliers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    contact_info = Column(String, nullable=True)

class ProductSupplier(Base):
    """description: This junction table represents the many-to-many relationship between products and suppliers."""
    __tablename__ = 'product_suppliers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)

class Inventory(Base):
    """description: This table tracks the stock levels of products in the fruit store."""
    __tablename__ = 'inventories'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity_in_stock = Column(Integer, nullable=False)

class Employee(Base):
    """description: This table stores information about employees working at the store, including their salary."""
    __tablename__ = 'employees'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    position = Column(String, nullable=True)
    salary = Column(Float, nullable=False)

class Shipment(Base):
    """description: This table records shipments received from suppliers."""
    __tablename__ = 'shipments'
    id = Column(Integer, primary_key=True, autoincrement=True)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=False)
    shipment_date = Column(DateTime, default=datetime.datetime.now, nullable=False)

class ShipmentDetail(Base):
    """description: This table details the products included in a shipment."""
    __tablename__ = 'shipment_details'
    id = Column(Integer, primary_key=True, autoincrement=True)
    shipment_id = Column(Integer, ForeignKey('shipments.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    quantity = Column(Integer, nullable=False)

class Promotion(Base):
    """description: This table stores information about product promotions."""
    __tablename__ = 'promotions'
    id = Column(Integer, primary_key=True, autoincrement=True)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    discount_percent = Column(Float, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

class CustomerFeedback(Base):
    """description: This table collects feedback from customers about products."""
    __tablename__ = 'customer_feedbacks'
    id = Column(Integer, primary_key=True, autoincrement=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=False)
    product_id = Column(Integer, ForeignKey('products.id'), nullable=False)
    feedback_text = Column(String, nullable=True)
    rating = Column(Integer, nullable=True)

# Database setup
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Data insertions
# Customers
customer1 = Customer(name='John Doe', email='john.doe@example.com')
customer2 = Customer(name='Jane Smith', email='jane.smith@example.com')
session.add_all([customer1, customer2])

# Products
product1 = Product(name='Apple', price=0.5)
product2 = Product(name='Orange', price=0.75)
session.add_all([product1, product2])

# Orders
order1 = Order(customer_id=1, order_date=datetime.datetime.now())
order2 = Order(customer_id=2, order_date=datetime.datetime.now())
session.add_all([order1, order2])

# Order Details
order_detail1 = OrderDetail(order_id=1, product_id=1, quantity=10)
order_detail2 = OrderDetail(order_id=1, product_id=2, quantity=5)
order_detail3 = OrderDetail(order_id=2, product_id=1, quantity=20)
session.add_all([order_detail1, order_detail2, order_detail3])

# Suppliers
supplier1 = Supplier(name='Fruit Supplier Inc', contact_info='contact@fruitsupplier.com')
supplier2 = Supplier(name='Organic Farms', contact_info='info@organicfarms.com')
session.add_all([supplier1, supplier2])

# Product Suppliers
product_supplier1 = ProductSupplier(product_id=1, supplier_id=1)
product_supplier2 = ProductSupplier(product_id=2, supplier_id=2)
session.add_all([product_supplier1, product_supplier2])

# Inventory
inventory1 = Inventory(product_id=1, quantity_in_stock=100)
inventory2 = Inventory(product_id=2, quantity_in_stock=150)
session.add_all([inventory1, inventory2])

# Employees
employee1 = Employee(name='Alice Johnson', position='Manager', salary=60000.0)
employee2 = Employee(name='Bob Williams', position='Cashier', salary=30000.0)
session.add_all([employee1, employee2])

# Shipments
shipment1 = Shipment(supplier_id=1, shipment_date=datetime.datetime.now())
shipment2 = Shipment(supplier_id=2, shipment_date=datetime.datetime.now())
session.add_all([shipment1, shipment2])

# Shipment Details
shipment_detail1 = ShipmentDetail(shipment_id=1, product_id=1, quantity=50)
shipment_detail2 = ShipmentDetail(shipment_id=2, product_id=2, quantity=60)
session.add_all([shipment_detail1, shipment_detail2])

# Promotions
promotion1 = Promotion(product_id=1, discount_percent=10.0, start_date=datetime.datetime.now(), end_date=datetime.datetime.now() + datetime.timedelta(days=10))
promotion2 = Promotion(product_id=2, discount_percent=15.0, start_date=datetime.datetime.now(), end_date=datetime.datetime.now() + datetime.timedelta(days=20))
session.add_all([promotion1, promotion2])

# Customer Feedback
feedback1 = CustomerFeedback(customer_id=1, product_id=1, feedback_text="Great quality!", rating=5)
feedback2 = CustomerFeedback(customer_id=2, product_id=2, feedback_text="Fresh and tasty.", rating=4)
session.add_all([feedback1, feedback2])

# Commit the session
session.commit()

# Close the session
session.close()
