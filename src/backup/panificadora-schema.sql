--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: WarehouseProducts; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."WarehouseProducts" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "productId" integer NOT NULL,
    quantity integer NOT NULL,
    "warehouseId" integer NOT NULL
);


ALTER TABLE public."WarehouseProducts" OWNER TO root;

--
-- Name: WarehouseProducts_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."WarehouseProducts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."WarehouseProducts_id_seq" OWNER TO root;

--
-- Name: WarehouseProducts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."WarehouseProducts_id_seq" OWNED BY public."WarehouseProducts".id;


--
-- Name: Warehouses; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."Warehouses" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    address character varying NOT NULL
);


ALTER TABLE public."Warehouses" OWNER TO root;

--
-- Name: Warehouses_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."Warehouses_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Warehouses_id_seq" OWNER TO root;

--
-- Name: Warehouses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."Warehouses_id_seq" OWNED BY public."Warehouses".id;


--
-- Name: customers; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.customers (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    phone character varying NOT NULL,
    email character varying NOT NULL,
    address character varying NOT NULL
);


ALTER TABLE public.customers OWNER TO root;

--
-- Name: customers_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.customers_id_seq OWNER TO root;

--
-- Name: customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.customers_id_seq OWNED BY public.customers.id;


--
-- Name: movementTypes; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."movementTypes" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    description character varying NOT NULL
);


ALTER TABLE public."movementTypes" OWNER TO root;

--
-- Name: movementTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."movementTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."movementTypes_id_seq" OWNER TO root;

--
-- Name: movementTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."movementTypes_id_seq" OWNED BY public."movementTypes".id;


--
-- Name: movements; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.movements (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "movementTypeId" integer NOT NULL,
    "purchaseId" integer NOT NULL,
    "saleId" integer NOT NULL
);


ALTER TABLE public.movements OWNER TO root;

--
-- Name: movements_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.movements_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movements_id_seq OWNER TO root;

--
-- Name: movements_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.movements_id_seq OWNED BY public.movements.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.products (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    description character varying NOT NULL,
    price integer NOT NULL,
    "isFinalProduct" integer NOT NULL
);


ALTER TABLE public.products OWNER TO root;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.products_id_seq OWNER TO root;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: purchaseDetails; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."purchaseDetails" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "purchaseId" integer NOT NULL,
    "productId" integer NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public."purchaseDetails" OWNER TO root;

--
-- Name: purchaseDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."purchaseDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."purchaseDetails_id_seq" OWNER TO root;

--
-- Name: purchaseDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."purchaseDetails_id_seq" OWNED BY public."purchaseDetails".id;


--
-- Name: purchases; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.purchases (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    total integer NOT NULL,
    date timestamp without time zone NOT NULL,
    "supplierId" integer NOT NULL,
    "warehouseId" integer NOT NULL
);


ALTER TABLE public.purchases OWNER TO root;

--
-- Name: purchases_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.purchases_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchases_id_seq OWNER TO root;

--
-- Name: purchases_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.purchases_id_seq OWNED BY public.purchases.id;


--
-- Name: saleDetails; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."saleDetails" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "saleId" integer NOT NULL,
    "warehouseProductId" integer NOT NULL,
    quantity integer NOT NULL,
    price integer NOT NULL
);


ALTER TABLE public."saleDetails" OWNER TO root;

--
-- Name: saleDetails_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."saleDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."saleDetails_id_seq" OWNER TO root;

--
-- Name: saleDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."saleDetails_id_seq" OWNED BY public."saleDetails".id;


--
-- Name: sales; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.sales (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    "customerId" integer NOT NULL,
    date timestamp without time zone NOT NULL,
    total integer NOT NULL,
    discount integer NOT NULL,
    store integer NOT NULL,
    "storeId" integer
);


ALTER TABLE public.sales OWNER TO root;

--
-- Name: sales_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sales_id_seq OWNER TO root;

--
-- Name: sales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.sales_id_seq OWNED BY public.sales.id;


--
-- Name: stores; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.stores (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    address character varying NOT NULL
);


ALTER TABLE public.stores OWNER TO root;

--
-- Name: stores_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.stores_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.stores_id_seq OWNER TO root;

--
-- Name: stores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.stores_id_seq OWNED BY public.stores.id;


--
-- Name: supplierProducts; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public."supplierProducts" (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    price integer NOT NULL,
    "quantityAvailable" integer NOT NULL,
    discount integer,
    "supplierId" integer NOT NULL,
    "productId" integer NOT NULL
);


ALTER TABLE public."supplierProducts" OWNER TO root;

--
-- Name: supplierProducts_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public."supplierProducts_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."supplierProducts_id_seq" OWNER TO root;

--
-- Name: supplierProducts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public."supplierProducts_id_seq" OWNED BY public."supplierProducts".id;


--
-- Name: suppliers; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.suppliers (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    contact character varying NOT NULL,
    phone character varying NOT NULL,
    email character varying NOT NULL,
    address character varying NOT NULL
);


ALTER TABLE public.suppliers OWNER TO root;

--
-- Name: suppliers_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.suppliers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.suppliers_id_seq OWNER TO root;

--
-- Name: suppliers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.suppliers_id_seq OWNED BY public.suppliers.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    "deletedAt" timestamp without time zone,
    name character varying NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL
);


ALTER TABLE public.users OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO root;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: WarehouseProducts id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."WarehouseProducts" ALTER COLUMN id SET DEFAULT nextval('public."WarehouseProducts_id_seq"'::regclass);


--
-- Name: Warehouses id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Warehouses" ALTER COLUMN id SET DEFAULT nextval('public."Warehouses_id_seq"'::regclass);


--
-- Name: customers id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.customers ALTER COLUMN id SET DEFAULT nextval('public.customers_id_seq'::regclass);


--
-- Name: movementTypes id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."movementTypes" ALTER COLUMN id SET DEFAULT nextval('public."movementTypes_id_seq"'::regclass);


--
-- Name: movements id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements ALTER COLUMN id SET DEFAULT nextval('public.movements_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: purchaseDetails id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."purchaseDetails" ALTER COLUMN id SET DEFAULT nextval('public."purchaseDetails_id_seq"'::regclass);


--
-- Name: purchases id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.purchases ALTER COLUMN id SET DEFAULT nextval('public.purchases_id_seq'::regclass);


--
-- Name: saleDetails id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."saleDetails" ALTER COLUMN id SET DEFAULT nextval('public."saleDetails_id_seq"'::regclass);


--
-- Name: sales id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sales ALTER COLUMN id SET DEFAULT nextval('public.sales_id_seq'::regclass);


--
-- Name: stores id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.stores ALTER COLUMN id SET DEFAULT nextval('public.stores_id_seq'::regclass);


--
-- Name: supplierProducts id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."supplierProducts" ALTER COLUMN id SET DEFAULT nextval('public."supplierProducts_id_seq"'::regclass);


--
-- Name: suppliers id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.suppliers ALTER COLUMN id SET DEFAULT nextval('public.suppliers_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: products PK_0806c755e0aca124e67c0cf6d7d; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id);


--
-- Name: saleDetails PK_1157fdce41126a20cc589e87906; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."saleDetails"
    ADD CONSTRAINT "PK_1157fdce41126a20cc589e87906" PRIMARY KEY (id);


--
-- Name: customers PK_133ec679a801fab5e070f73d3ea; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.customers
    ADD CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY (id);


--
-- Name: purchases PK_1d55032f37a34c6eceacbbca6b8; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT "PK_1d55032f37a34c6eceacbbca6b8" PRIMARY KEY (id);


--
-- Name: Warehouses PK_2d792962033e389d9f910a99c0f; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."Warehouses"
    ADD CONSTRAINT "PK_2d792962033e389d9f910a99c0f" PRIMARY KEY (id);


--
-- Name: sales PK_4f0bc990ae81dba46da680895ea; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY (id);


--
-- Name: movements PK_5a8e3da15ab8f2ce353e7f58f67; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "PK_5a8e3da15ab8f2ce353e7f58f67" PRIMARY KEY (id);


--
-- Name: stores PK_7aa6e7d71fa7acdd7ca43d7c9cb; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.stores
    ADD CONSTRAINT "PK_7aa6e7d71fa7acdd7ca43d7c9cb" PRIMARY KEY (id);


--
-- Name: purchaseDetails PK_8a1470c2495b84cb75f3435f7d8; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."purchaseDetails"
    ADD CONSTRAINT "PK_8a1470c2495b84cb75f3435f7d8" PRIMARY KEY (id);


--
-- Name: users PK_a3ffb1c0c8416b9fc6f907b7433; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);


--
-- Name: suppliers PK_b70ac51766a9e3144f778cfe81e; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.suppliers
    ADD CONSTRAINT "PK_b70ac51766a9e3144f778cfe81e" PRIMARY KEY (id);


--
-- Name: movementTypes PK_b9c6815b0177d3d8a392ee3676f; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."movementTypes"
    ADD CONSTRAINT "PK_b9c6815b0177d3d8a392ee3676f" PRIMARY KEY (id);


--
-- Name: WarehouseProducts PK_f243dfc875f5e20ac9615c446fe; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."WarehouseProducts"
    ADD CONSTRAINT "PK_f243dfc875f5e20ac9615c446fe" PRIMARY KEY (id);


--
-- Name: supplierProducts PK_fa4e603accb0cb6a8986578487f; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."supplierProducts"
    ADD CONSTRAINT "PK_fa4e603accb0cb6a8986578487f" PRIMARY KEY (id);


--
-- Name: movements UQ_21ed7e986c8c95c52682076994d; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "UQ_21ed7e986c8c95c52682076994d" UNIQUE ("saleId");


--
-- Name: movements UQ_be196db7c936a3ea420f335dea2; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "UQ_be196db7c936a3ea420f335dea2" UNIQUE ("purchaseId");


--
-- Name: purchaseDetails FK_0c708b93c6bd0566c246df542ea; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."purchaseDetails"
    ADD CONSTRAINT "FK_0c708b93c6bd0566c246df542ea" FOREIGN KEY ("purchaseId") REFERENCES public.purchases(id);


--
-- Name: WarehouseProducts FK_203e7f5abcc3caeecab87688491; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."WarehouseProducts"
    ADD CONSTRAINT "FK_203e7f5abcc3caeecab87688491" FOREIGN KEY ("warehouseId") REFERENCES public."Warehouses"(id);


--
-- Name: movements FK_21ed7e986c8c95c52682076994d; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "FK_21ed7e986c8c95c52682076994d" FOREIGN KEY ("saleId") REFERENCES public.sales(id);


--
-- Name: purchaseDetails FK_2494dbecf75c6c92db656689dba; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."purchaseDetails"
    ADD CONSTRAINT "FK_2494dbecf75c6c92db656689dba" FOREIGN KEY ("productId") REFERENCES public.products(id);


--
-- Name: supplierProducts FK_35ce578f6aa24fe9090bd2c8cd1; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."supplierProducts"
    ADD CONSTRAINT "FK_35ce578f6aa24fe9090bd2c8cd1" FOREIGN KEY ("productId") REFERENCES public.products(id);


--
-- Name: sales FK_3a92cf6add00043cef9833db1cd; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT "FK_3a92cf6add00043cef9833db1cd" FOREIGN KEY ("customerId") REFERENCES public.customers(id);


--
-- Name: purchases FK_5cbca7ccb91c4c9a6027358caf8; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT "FK_5cbca7ccb91c4c9a6027358caf8" FOREIGN KEY ("warehouseId") REFERENCES public."Warehouses"(id);


--
-- Name: purchases FK_77980c752fdeb3689e318fde424; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.purchases
    ADD CONSTRAINT "FK_77980c752fdeb3689e318fde424" FOREIGN KEY ("supplierId") REFERENCES public.suppliers(id);


--
-- Name: WarehouseProducts FK_89370cefb8c45d034801a8652b6; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."WarehouseProducts"
    ADD CONSTRAINT "FK_89370cefb8c45d034801a8652b6" FOREIGN KEY ("productId") REFERENCES public.products(id);


--
-- Name: saleDetails FK_9ba478cc9062aa0473a7fe8c95f; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."saleDetails"
    ADD CONSTRAINT "FK_9ba478cc9062aa0473a7fe8c95f" FOREIGN KEY ("warehouseProductId") REFERENCES public."WarehouseProducts"(id);


--
-- Name: movements FK_b1ab66ccf5b4c14b74a9132e5ea; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "FK_b1ab66ccf5b4c14b74a9132e5ea" FOREIGN KEY ("movementTypeId") REFERENCES public."movementTypes"(id);


--
-- Name: movements FK_be196db7c936a3ea420f335dea2; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.movements
    ADD CONSTRAINT "FK_be196db7c936a3ea420f335dea2" FOREIGN KEY ("purchaseId") REFERENCES public.purchases(id);


--
-- Name: sales FK_ef0e802924109a86947d4df5c9e; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.sales
    ADD CONSTRAINT "FK_ef0e802924109a86947d4df5c9e" FOREIGN KEY ("storeId") REFERENCES public.stores(id);


--
-- Name: saleDetails FK_f6b99df5d9662aa7b7d87c0f851; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."saleDetails"
    ADD CONSTRAINT "FK_f6b99df5d9662aa7b7d87c0f851" FOREIGN KEY ("saleId") REFERENCES public.sales(id);


--
-- Name: supplierProducts FK_fbc5d25c7aa413e5a1b3567ab38; Type: FK CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public."supplierProducts"
    ADD CONSTRAINT "FK_fbc5d25c7aa413e5a1b3567ab38" FOREIGN KEY ("supplierId") REFERENCES public.suppliers(id);


--
-- PostgreSQL database dump complete
--

