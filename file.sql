CREATE TABLE vendas (
    id_pedido TEXT,
    data_pedido TEXT,
    id_cliente TEXT,
    segmento TEXT,
    regiao TEXT,
    pais TEXT,
    id_product TEXT,
    categoria TEXT,
    subcategoria TEXT,
    total_vendas REAL,
    quantidade INTEGER,
    desconto REAL,
    lucro REAL,
    prioridade TEXT
);

INSERT INTO vendas (id_pedido, data_pedido, id_cliente, segmento, regiao, pais, id_product, categoria, subcategoria, total_vendas, quantidade, desconto, lucro, prioridade)
VALUES 
('CA-2012-124891', '31/07/2012', 'RH-19495', 'Consumidor', 'New York', 'United States', 'TEC-AC-10003033', 'Tecnologia', 'Accessories', 2309.65, 7, 0, 7621845, 'Critico'),
('IN-2013-77878', '05/02/2013', 'JR-16210', 'Corporativo', 'New South Wales', 'Australia', 'FUR-CH-10003950', 'Moveis', 'Chairs', 3709.395, 9, 0.1, -288.765, 'Critico'),
('IN-2013-71249', '17/10/2013', 'CR-12730', 'Consumidor', 'Queensland', 'Australia', 'TEC-PH-10004664', 'Tecnologia', 'Phones', 5175.171, 9, 0.1, 919.971, 'Medio'),
('ES-2013-1579342', '28/01/2013', 'KM-16375', 'Home Office', 'Berlin', 'Germany', 'TEC-PH-10004583', 'Tecnologia', 'Phones', 2892.51, 5, 0.1, -96.54, 'Medio'),
('SG-2013-4320', '05/11/2013', 'RH-9495', 'Consumidor', 'Dakar', 'Senegal', 'TEC-SHA-10000501', 'Tecnologia', 'Copiers', 2832.96, 8, 0, 311.52, 'Critico'),
('IN-2013-42360', '28/06/2013', 'JM-15655', 'Corporativo', 'New South Wales', 'Australia', 'TEC-PH-10000030', 'Tecnologia', 'Phones', 2862.675, 5, 0.1, 763.275, 'Critico'),
('IN-2011-81826', '07/11/2011', 'TS-21340', 'Consumidor', 'Wellington', 'New Zealand', 'FUR-CH-10004050', 'Moveis', 'Chairs', 1822.08, 4, 0, 564.84, 'Critico'),
('IN-2012-86369', '14/04/2012', 'MB-18085', 'Consumidor', 'Waikato', 'New Zealand', 'FUR-TA-10002958', 'Moveis', 'Tables', 5244.84, 6, 0, 996.48, 'Alto'),
('CA-2014-135909', '14/10/2014', 'JW-15220', 'Corporativo', 'California', 'United States', 'OFF-BI-10003527', 'Suprimentos', 'Binders', 5083.96, 5, 0.2, 1906485, 'Baixo'),
('CA-2012-116638', '28/01/2012', 'JH-15985', 'Consumidor', 'North Carolina', 'United States', 'FUR-TA-10000198', 'Moveis', 'Tables', 4297.644, 13, 0.4, -18623124, 'Critico'),
('CA-2011-102988', '05/04/2011', 'GM-14695', 'Corporativo', 'Virginia', 'United States', 'OFF-SU-10002881', 'Suprimentos', 'Supplies', 4164.05, 5, 0, 83281, 'Alto'),
('ID-2012-28402', '19/04/2012', 'AJ-10780', 'Corporativo', 'Kabul', 'Afghanistan', 'FUR-TA-10001889', 'Moveis', 'Tables', 4626.15, 5, 0, 647.55, 'Alto'),
('SA-2011-1830', '27/12/2011', 'MM-7260', 'Consumidor', 'Jizan', 'Saudi Arabia', 'TEC-CIS-10001717', 'Tecnologia', 'Phones', 2616.96, 4, 0, 1151.4, 'Critico'),
('MX-2012-130015', '13/11/2012', 'VF-21715', 'Home Office', 'Parana', 'Brazil', 'FUR-CH-10002033', 'Moveis', 'Chairs', 2221.8, 7, 0, 622.02, 'Critico'),
('IN-2013-73951', '06/06/2013', 'PF-19120', 'Consumidor', 'Heilongjiang', 'China', 'OFF-AP-10003500', 'Suprimentos', 'Appliances', 3701.52, 12, 0, 1036.08, 'Critico'),
('ES-2014-5099955', '31/07/2014', 'BP-11185', 'Corporativo', 'Ile-de-France', 'France', 'OFF-AP-10000423', 'Suprimentos', 'Appliances', 1869.588, 4, 0.1, 186.948, 'Critico'),
('CA-2014-143567', '03/11/2014', 'TB-21175', 'Corporativo', 'Kentucky', 'United States', 'TEC-AC-10004145', 'Tecnologia', 'Accessories', 2249.91, 9, 0, 5174793, 'Critico'),
('ES-2014-1651774', '08/09/2014', 'PJ-18835', 'Corporativo', 'Tuscany', 'Italy', 'OFF-AP-10004512', 'Suprimentos', 'Appliances', 7958.58, 14, 0, 3979.08, 'Baixo'),
('IN-2014-11763', '31/01/2014', 'JS-15685', 'Corporativo', 'Queensland', 'Australia', 'TEC-CO-10000865', 'Tecnologia', 'Copiers', 2565.594, 9, 0.1, 28404, 'Critico');
