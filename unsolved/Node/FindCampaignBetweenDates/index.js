// Given an array of Campaigns and their
// start and end dates,
// find what campaigns where running in a given date.
// Assume input dates are sorted

var input = [
  ['1082', new Date('6/13/13'), new Date('7/13/13')],
['4685', new Date('6/14/13'), new Date('7/14/13')],
['8928', new Date('6/15/13'), new Date('7/15/13')],
['1117', new Date('6/16/13'), new Date('7/16/13')],
['6794', new Date('6/17/13'), new Date('7/17/13')],
['559', new Date('6/18/13'), new Date('7/18/13')],
['7105', new Date('6/19/13'), new Date('7/19/13')],
['3029', new Date('6/20/13'), new Date('7/20/13')],
['3977', new Date('6/21/13'), new Date('7/21/13')],
['2158', new Date('6/22/13'), new Date('7/22/13')],
['3105', new Date('6/23/13'), new Date('7/23/13')],
['6781', new Date('6/24/13'), new Date('7/24/13')],
['5260', new Date('6/25/13'), new Date('7/25/13')],
['1344', new Date('6/26/13'), new Date('7/26/13')],
['7413', new Date('6/27/13'), new Date('7/27/13')],
['5235', new Date('6/28/13'), new Date('7/28/13')],
['966', new Date('6/29/13'), new Date('7/29/13')],
['5760', new Date('6/30/13'), new Date('7/30/13')],
['1078', new Date('7/1/13'), new Date('7/31/13')],
['8498', new Date('7/2/13'), new Date('8/1/13')],
['7900', new Date('7/3/13'), new Date('8/2/13')],
['7397', new Date('7/4/13'), new Date('8/3/13')],
['1525', new Date('7/5/13'), new Date('8/4/13')],
['5059', new Date('7/6/13'), new Date('8/5/13')],
['7932', new Date('7/7/13'), new Date('8/6/13')],
['7051', new Date('7/8/13'), new Date('8/7/13')],
['8595', new Date('7/9/13'), new Date('8/8/13')],
['2953', new Date('7/10/13'), new Date('8/9/13')],
['7248', new Date('7/11/13'), new Date('8/10/13')],
['7164', new Date('7/12/13'), new Date('8/11/13')],
['1518', new Date('7/13/13'), new Date('8/12/13')],
['7827', new Date('7/14/13'), new Date('8/13/13')],
['5194', new Date('7/15/13'), new Date('8/14/13')],
['3210', new Date('7/16/13'), new Date('8/15/13')],
['7874', new Date('7/17/13'), new Date('8/16/13')],
['3380', new Date('7/18/13'), new Date('8/17/13')],
['6623', new Date('7/19/13'), new Date('8/18/13')],
['9044', new Date('7/20/13'), new Date('8/19/13')],
['1984', new Date('7/21/13'), new Date('8/20/13')],
['7942', new Date('7/22/13'), new Date('8/21/13')],
['4948', new Date('7/23/13'), new Date('8/22/13')],
['8829', new Date('7/24/13'), new Date('8/23/13')],
['5551', new Date('7/25/13'), new Date('8/24/13')],
['8961', new Date('7/26/13'), new Date('8/25/13')],
['5413', new Date('7/27/13'), new Date('8/26/13')],
['6504', new Date('7/28/13'), new Date('8/27/13')],
['7096', new Date('7/29/13'), new Date('8/28/13')],
['9727', new Date('7/30/13'), new Date('8/29/13')],
['9912', new Date('7/31/13'), new Date('8/30/13')],
['1070', new Date('8/1/13'), new Date('8/31/13')],
['7898', new Date('8/2/13'), new Date('9/1/13')],
['7431', new Date('8/3/13'), new Date('9/2/13')],
['9362', new Date('8/4/13'), new Date('9/3/13')],
['4452', new Date('8/5/13'), new Date('9/4/13')],
['1433', new Date('8/6/13'), new Date('9/5/13')],
['2509', new Date('8/7/13'), new Date('9/6/13')],
['632', new Date('8/8/13'), new Date('9/7/13')],
['8572', new Date('8/9/13'), new Date('9/8/13')],
['3313', new Date('8/10/13'), new Date('9/9/13')],
['4117', new Date('8/11/13'), new Date('9/10/13')],
['1425', new Date('8/12/13'), new Date('9/11/13')],
['8490', new Date('8/13/13'), new Date('9/12/13')],
['7126', new Date('8/14/13'), new Date('9/13/13')],
['9228', new Date('8/15/13'), new Date('9/14/13')],
['5561', new Date('8/16/13'), new Date('9/15/13')],
['4920', new Date('8/17/13'), new Date('9/16/13')],
['3777', new Date('8/18/13'), new Date('9/17/13')],
['7195', new Date('8/19/13'), new Date('9/18/13')],
['3574', new Date('8/20/13'), new Date('9/19/13')],
['1406', new Date('8/21/13'), new Date('9/20/13')],
['1338', new Date('8/22/13'), new Date('9/21/13')],
['3779', new Date('8/23/13'), new Date('9/22/13')],
['3494', new Date('8/24/13'), new Date('9/23/13')],
['2898', new Date('8/25/13'), new Date('9/24/13')],
['1681', new Date('8/26/13'), new Date('9/25/13')],
['5611', new Date('8/27/13'), new Date('9/26/13')],
['5388', new Date('8/28/13'), new Date('9/27/13')],
['4894', new Date('8/29/13'), new Date('9/28/13')],
['3036', new Date('8/30/13'), new Date('9/29/13')],
['928', new Date('8/31/13'), new Date('9/30/13')],
['7461', new Date('9/1/13'), new Date('10/1/13')],
['5518', new Date('9/2/13'), new Date('10/2/13')],
['2475', new Date('9/3/13'), new Date('10/3/13')],
['4414', new Date('9/4/13'), new Date('10/4/13')],
['529', new Date('9/5/13'), new Date('10/5/13')],
['3228', new Date('9/6/13'), new Date('10/6/13')],
['3064', new Date('9/7/13'), new Date('10/7/13')],
['1081', new Date('9/8/13'), new Date('10/8/13')],
['8872', new Date('9/9/13'), new Date('10/9/13')],
['1931', new Date('9/10/13'), new Date('10/10/13')],
['8061', new Date('9/11/13'), new Date('10/11/13')],
['2052', new Date('9/12/13'), new Date('10/12/13')],
['2048', new Date('9/13/13'), new Date('10/13/13')],
['7991', new Date('9/14/13'), new Date('10/14/13')],
['5167', new Date('9/15/13'), new Date('10/15/13')],
['9555', new Date('9/16/13'), new Date('10/16/13')],
['7337', new Date('9/17/13'), new Date('10/17/13')],
['7056', new Date('9/18/13'), new Date('10/18/13')],
['1898', new Date('9/19/13'), new Date('10/19/13')],
['6968', new Date('9/20/13'), new Date('10/20/13')],
['2981', new Date('9/21/13'), new Date('10/21/13')],
['7887', new Date('9/22/13'), new Date('10/22/13')],
['4811', new Date('9/23/13'), new Date('10/23/13')],
['7122', new Date('9/24/13'), new Date('10/24/13')],
['8589', new Date('9/25/13'), new Date('10/25/13')],
['2213', new Date('9/26/13'), new Date('10/26/13')],
['6942', new Date('9/27/13'), new Date('10/27/13')],
['5601', new Date('9/28/13'), new Date('10/28/13')],
['9034', new Date('9/29/13'), new Date('10/29/13')],
['1791', new Date('9/30/13'), new Date('10/30/13')],
['5379', new Date('10/1/13'), new Date('10/31/13')],
['4123', new Date('10/2/13'), new Date('11/1/13')],
['338', new Date('10/3/13'), new Date('11/2/13')],
['4978', new Date('10/4/13'), new Date('11/3/13')],
['5052', new Date('10/5/13'), new Date('11/4/13')],
['7865', new Date('10/6/13'), new Date('11/5/13')],
['6219', new Date('10/7/13'), new Date('11/6/13')],
['6697', new Date('10/8/13'), new Date('11/7/13')],
['1036', new Date('10/9/13'), new Date('11/8/13')],
['2065', new Date('10/10/13'), new Date('11/9/13')],
['7400', new Date('10/11/13'), new Date('11/10/13')],
['2710', new Date('10/12/13'), new Date('11/11/13')],
['6226', new Date('10/13/13'), new Date('11/12/13')],
['7519', new Date('10/14/13'), new Date('11/13/13')],
['7954', new Date('10/15/13'), new Date('11/14/13')],
['3234', new Date('10/16/13'), new Date('11/15/13')],
['5410', new Date('10/17/13'), new Date('11/16/13')],
['5836', new Date('10/18/13'), new Date('11/17/13')],
['7620', new Date('10/19/13'), new Date('11/18/13')],
['5393', new Date('10/20/13'), new Date('11/19/13')],
['7848', new Date('10/21/13'), new Date('11/20/13')],
['7305', new Date('10/22/13'), new Date('11/21/13')],
['2580', new Date('10/23/13'), new Date('11/22/13')],
['4271', new Date('10/24/13'), new Date('11/23/13')],
['8627', new Date('10/25/13'), new Date('11/24/13')],
['5532', new Date('10/26/13'), new Date('11/25/13')],
['3573', new Date('10/27/13'), new Date('11/26/13')],
['9045', new Date('10/28/13'), new Date('11/27/13')],
['596', new Date('10/29/13'), new Date('11/28/13')],
['3386', new Date('10/30/13'), new Date('11/29/13')],
['2323', new Date('10/31/13'), new Date('11/30/13')],
['1194', new Date('11/1/13'), new Date('12/1/13')],
['7401', new Date('11/2/13'), new Date('12/2/13')],
['9595', new Date('11/3/13'), new Date('12/3/13')],
['3726', new Date('11/4/13'), new Date('12/4/13')],
['1050', new Date('11/5/13'), new Date('12/5/13')],
['8491', new Date('11/6/13'), new Date('12/6/13')],
['4082', new Date('11/7/13'), new Date('12/7/13')],
['3207', new Date('11/8/13'), new Date('12/8/13')],
['2749', new Date('11/9/13'), new Date('12/9/13')],
['5628', new Date('11/10/13'), new Date('12/10/13')],
['1221', new Date('11/11/13'), new Date('12/11/13')],
['7801', new Date('11/12/13'), new Date('12/12/13')],
['3393', new Date('11/13/13'), new Date('12/13/13')],
['8658', new Date('11/14/13'), new Date('12/14/13')],
['3143', new Date('11/15/13'), new Date('12/15/13')],
['480', new Date('11/16/13'), new Date('12/16/13')],
['2706', new Date('11/17/13'), new Date('12/17/13')],
['3329', new Date('11/18/13'), new Date('12/18/13')],
['5550', new Date('11/19/13'), new Date('12/19/13')],
['3217', new Date('11/20/13'), new Date('12/20/13')],
['3810', new Date('11/21/13'), new Date('12/21/13')],
['6933', new Date('11/22/13'), new Date('12/22/13')],
['6581', new Date('11/23/13'), new Date('12/23/13')],
['7814', new Date('11/24/13'), new Date('12/24/13')],
['7889', new Date('11/25/13'), new Date('12/25/13')],
['9378', new Date('11/26/13'), new Date('12/26/13')],
['5387', new Date('11/27/13'), new Date('12/27/13')],
['5634', new Date('11/28/13'), new Date('12/28/13')],
['5498', new Date('11/29/13'), new Date('12/29/13')],
['5622', new Date('11/30/13'), new Date('12/30/13')],
['9348', new Date('12/1/13'), new Date('12/31/13')],
['7024', new Date('12/2/13'), new Date('1/1/14')],
['7715', new Date('12/3/13'), new Date('1/2/14')],
['6397', new Date('12/4/13'), new Date('1/3/14')],
['7776', new Date('12/5/13'), new Date('1/4/14')],
['3692', new Date('12/6/13'), new Date('1/5/14')],
['1890', new Date('12/7/13'), new Date('1/6/14')],
['4840', new Date('12/8/13'), new Date('1/7/14')],
['5784', new Date('12/9/13'), new Date('1/8/14')],
['3432', new Date('12/10/13'), new Date('1/9/14')],
['3875', new Date('12/11/13'), new Date('1/10/14')],
['8563', new Date('12/12/13'), new Date('1/11/14')],
['1358', new Date('12/13/13'), new Date('1/12/14')],
['7620', new Date('12/14/13'), new Date('1/13/14')],
['6599', new Date('12/15/13'), new Date('1/14/14')],
['8228', new Date('12/16/13'), new Date('1/15/14')],
['5573', new Date('12/17/13'), new Date('1/16/14')],
['9930', new Date('12/18/13'), new Date('1/17/14')],
['4954', new Date('12/19/13'), new Date('1/18/14')],
['4860', new Date('12/20/13'), new Date('1/19/14')],
['4024', new Date('12/21/13'), new Date('1/20/14')],
['4687', new Date('12/22/13'), new Date('1/21/14')],
['2674', new Date('12/23/13'), new Date('1/22/14')],
['687', new Date('12/24/13'), new Date('1/23/14')],
['34', new Date('12/25/13'), new Date('1/24/14')],
['6936', new Date('12/26/13'), new Date('1/25/14')],
['3090', new Date('12/27/13'), new Date('1/26/14')],
['318', new Date('12/28/13'), new Date('1/27/14')],
['8639', new Date('12/29/13'), new Date('1/28/14')],
['4006', new Date('12/30/13'), new Date('1/29/14')],
['2194', new Date('12/31/13'), new Date('1/30/14')],
['7008', new Date('1/1/14'), new Date('1/31/14')],
['8661', new Date('1/2/14'), new Date('2/1/14')],
['2006', new Date('1/3/14'), new Date('2/2/14')],
['7108', new Date('1/4/14'), new Date('2/3/14')],
['360', new Date('1/5/14'), new Date('2/4/14')],
['5280', new Date('1/6/14'), new Date('2/5/14')],
['5731', new Date('1/7/14'), new Date('2/6/14')],
['2753', new Date('1/8/14'), new Date('2/7/14')],
['3258', new Date('1/9/14'), new Date('2/8/14')],
['5186', new Date('1/10/14'), new Date('2/9/14')],
['7054', new Date('1/11/14'), new Date('2/10/14')],
['7942', new Date('1/12/14'), new Date('2/11/14')],
['3694', new Date('1/13/14'), new Date('2/12/14')],
['3054', new Date('1/14/14'), new Date('2/13/14')],
['5999', new Date('1/15/14'), new Date('2/14/14')],
['5979', new Date('1/16/14'), new Date('2/15/14')],
['7123', new Date('1/17/14'), new Date('2/16/14')],
['988', new Date('1/18/14'), new Date('2/17/14')],
['9596', new Date('1/19/14'), new Date('2/18/14')],
['5891', new Date('1/20/14'), new Date('2/19/14')],
['6193', new Date('1/21/14'), new Date('2/20/14')],
['2834', new Date('1/22/14'), new Date('2/21/14')],
['7522', new Date('1/23/14'), new Date('2/22/14')],
['2184', new Date('1/24/14'), new Date('2/23/14')],
['1471', new Date('1/25/14'), new Date('2/24/14')],
['1482', new Date('1/26/14'), new Date('2/25/14')],
['1586', new Date('1/27/14'), new Date('2/26/14')],
['198', new Date('1/28/14'), new Date('2/27/14')],
['6600', new Date('1/29/14'), new Date('2/28/14')],
['9442', new Date('1/30/14'), new Date('3/1/14')],
['772', new Date('1/31/14'), new Date('3/2/14')],
['2447', new Date('2/1/14'), new Date('3/3/14')],
['1416', new Date('2/2/14'), new Date('3/4/14')],
['3456', new Date('2/3/14'), new Date('3/5/14')],
['7993', new Date('2/4/14'), new Date('3/6/14')],
['20', new Date('2/5/14'), new Date('3/7/14')],
['4447', new Date('2/6/14'), new Date('3/8/14')],
['2006', new Date('2/7/14'), new Date('3/9/14')],
['915', new Date('2/8/14'), new Date('3/10/14')],
['2179', new Date('2/9/14'), new Date('3/11/14')],
['8056', new Date('2/10/14'), new Date('3/12/14')],
['1844', new Date('2/11/14'), new Date('3/13/14')],
['7010', new Date('2/12/14'), new Date('3/14/14')],
['3206', new Date('2/13/14'), new Date('3/15/14')],
['4454', new Date('2/14/14'), new Date('3/16/14')],
['9747', new Date('2/15/14'), new Date('3/17/14')],
['233', new Date('2/16/14'), new Date('3/18/14')],
['2810', new Date('2/17/14'), new Date('3/19/14')],
['3249', new Date('2/18/14'), new Date('3/20/14')],
['39', new Date('2/19/14'), new Date('3/21/14')],
['7053', new Date('2/20/14'), new Date('3/22/14')],
['3792', new Date('2/21/14'), new Date('3/23/14')],
['8553', new Date('2/22/14'), new Date('3/24/14')],
['3343', new Date('2/23/14'), new Date('3/25/14')],
['8530', new Date('2/24/14'), new Date('3/26/14')],
['3986', new Date('2/25/14'), new Date('3/27/14')],
['6856', new Date('2/26/14'), new Date('3/28/14')],
['6090', new Date('2/27/14'), new Date('3/29/14')],
['1965', new Date('2/28/14'), new Date('3/30/14')],
['5259', new Date('3/1/14'), new Date('3/31/14')],
['6804', new Date('3/2/14'), new Date('4/1/14')],
['4470', new Date('3/3/14'), new Date('4/2/14')],
['8150', new Date('3/4/14'), new Date('4/3/14')],
['2761', new Date('3/5/14'), new Date('4/4/14')],
['9671', new Date('3/6/14'), new Date('4/5/14')],
['8675', new Date('3/7/14'), new Date('4/6/14')],
['9879', new Date('3/8/14'), new Date('4/7/14')],
['6578', new Date('3/9/14'), new Date('4/8/14')],
['9101', new Date('3/10/14'), new Date('4/9/14')],
['4046', new Date('3/11/14'), new Date('4/10/14')],
['6048', new Date('3/12/14'), new Date('4/11/14')],
['8882', new Date('3/13/14'), new Date('4/12/14')],
['5179', new Date('3/14/14'), new Date('4/13/14')],
['8424', new Date('3/15/14'), new Date('4/14/14')],
['4016', new Date('3/16/14'), new Date('4/15/14')],
['4106', new Date('3/17/14'), new Date('4/16/14')],
['2734', new Date('3/18/14'), new Date('4/17/14')],
['663', new Date('3/19/14'), new Date('4/18/14')],
['7372', new Date('3/20/14'), new Date('4/19/14')],
['9100', new Date('3/21/14'), new Date('4/20/14')],
['8719', new Date('3/22/14'), new Date('4/21/14')],
['9210', new Date('3/23/14'), new Date('4/22/14')],
['4974', new Date('3/24/14'), new Date('4/23/14')],
['4587', new Date('3/25/14'), new Date('4/24/14')],
['34', new Date('3/26/14'), new Date('4/25/14')],
['9070', new Date('3/27/14'), new Date('4/26/14')],
['4976', new Date('3/28/14'), new Date('4/27/14')],
['8400', new Date('3/29/14'), new Date('4/28/14')],
['8591', new Date('3/30/14'), new Date('4/29/14')],
['2653', new Date('3/31/14'), new Date('4/30/14')],
['6009', new Date('4/1/14'), new Date('5/1/14')],
['4155', new Date('4/2/14'), new Date('5/2/14')],
['9225', new Date('4/3/14'), new Date('5/3/14')],
['7108', new Date('4/4/14'), new Date('5/4/14')],
['3620', new Date('4/5/14'), new Date('5/5/14')],
['1437', new Date('4/6/14'), new Date('5/6/14')],
['1379', new Date('4/7/14'), new Date('5/7/14')],
['9210', new Date('4/8/14'), new Date('5/8/14')],
['6341', new Date('4/9/14'), new Date('5/9/14')],
['356', new Date('4/10/14'), new Date('5/10/14')],
['6259', new Date('4/11/14'), new Date('5/11/14')],
['1046', new Date('4/12/14'), new Date('5/12/14')],
['2925', new Date('4/13/14'), new Date('5/13/14')],
['5877', new Date('4/14/14'), new Date('5/14/14')],
['7478', new Date('4/15/14'), new Date('5/15/14')],
['1477', new Date('4/16/14'), new Date('5/16/14')],
['2170', new Date('4/17/14'), new Date('5/17/14')],
['6051', new Date('4/18/14'), new Date('5/18/14')],
['9811', new Date('4/19/14'), new Date('5/19/14')],
['3245', new Date('4/20/14'), new Date('5/20/14')],
['6105', new Date('4/21/14'), new Date('5/21/14')],
['4654', new Date('4/22/14'), new Date('5/22/14')],
['4506', new Date('4/23/14'), new Date('5/23/14')],
['3859', new Date('4/24/14'), new Date('5/24/14')],
['3822', new Date('4/25/14'), new Date('5/25/14')],
['7446', new Date('4/26/14'), new Date('5/26/14')],
['7988', new Date('4/27/14'), new Date('5/27/14')],
['235', new Date('4/28/14'), new Date('5/28/14')],
['1277', new Date('4/29/14'), new Date('5/29/14')],
['8491', new Date('4/30/14'), new Date('5/30/14')],
['8135', new Date('5/1/14'), new Date('5/31/14')],
['6205', new Date('5/2/14'), new Date('6/1/14')],
['7465', new Date('5/3/14'), new Date('6/2/14')],
['3386', new Date('5/4/14'), new Date('6/3/14')],
['5814', new Date('5/5/14'), new Date('6/4/14')],
['4495', new Date('5/6/14'), new Date('6/5/14')],
['6893', new Date('5/7/14'), new Date('6/6/14')],
['2440', new Date('5/8/14'), new Date('6/7/14')],
['8015', new Date('5/9/14'), new Date('6/8/14')],
['7946', new Date('5/10/14'), new Date('6/9/14')],
['3798', new Date('5/11/14'), new Date('6/10/14')],
['2163', new Date('5/12/14'), new Date('6/11/14')],
['9287', new Date('5/13/14'), new Date('6/12/14')],
['6857', new Date('5/14/14'), new Date('6/13/14')],
['9350', new Date('5/15/14'), new Date('6/14/14')],
['7147', new Date('5/16/14'), new Date('6/15/14')],
['172', new Date('5/17/14'), new Date('6/16/14')],
['3866', new Date('5/18/14'), new Date('6/17/14')],
['6918', new Date('5/19/14'), new Date('6/18/14')],
['7955', new Date('5/20/14'), new Date('6/19/14')],
['1541', new Date('5/21/14'), new Date('6/20/14')],
['7439', new Date('5/22/14'), new Date('6/21/14')],
['403', new Date('5/23/14'), new Date('6/22/14')],
['205', new Date('5/24/14'), new Date('6/23/14')],
['7223', new Date('5/25/14'), new Date('6/24/14')],
['4653', new Date('5/26/14'), new Date('6/25/14')],
['8657', new Date('5/27/14'), new Date('6/26/14')],
['4235', new Date('5/28/14'), new Date('6/27/14')],
['8951', new Date('5/29/14'), new Date('6/28/14')],
['5442', new Date('5/30/14'), new Date('6/29/14')],
['3555', new Date('5/31/14'), new Date('6/30/14')],
['5682', new Date('6/1/14'), new Date('7/1/14')],
['9751', new Date('6/2/14'), new Date('7/2/14')],
['8294', new Date('6/3/14'), new Date('7/3/14')],
['2583', new Date('6/4/14'), new Date('7/4/14')],
['4612', new Date('6/5/14'), new Date('7/5/14')],
['6684', new Date('6/6/14'), new Date('7/6/14')],
['7466', new Date('6/7/14'), new Date('7/7/14')],
['8140', new Date('6/8/14'), new Date('7/8/14')],
['4752', new Date('6/9/14'), new Date('7/9/14')],
['86', new Date('6/10/14'), new Date('7/10/14')],
['4695', new Date('6/11/14'), new Date('7/11/14')],
['1461', new Date('6/12/14'), new Date('7/12/14')],
['4393', new Date('6/13/14'), new Date('7/13/14')],
['8477', new Date('6/14/14'), new Date('7/14/14')],
['5326', new Date('6/15/14'), new Date('7/15/14')],
['7882', new Date('6/16/14'), new Date('7/16/14')],
['3856', new Date('6/17/14'), new Date('7/17/14')],
['838', new Date('6/18/14'), new Date('7/18/14')],
['449', new Date('6/19/14'), new Date('7/19/14')],
['1368', new Date('6/20/14'), new Date('7/20/14')],
['1123', new Date('6/21/14'), new Date('7/21/14')],
['4549', new Date('6/22/14'), new Date('7/22/14')],
['3111', new Date('6/23/14'), new Date('7/23/14')],
['3189', new Date('6/24/14'), new Date('7/24/14')],
['3467', new Date('6/25/14'), new Date('7/25/14')],
['6787', new Date('6/26/14'), new Date('7/26/14')],
['5680', new Date('6/27/14'), new Date('7/27/14')],
['3164', new Date('6/28/14'), new Date('7/28/14')],
['9486', new Date('6/29/14'), new Date('7/29/14')],
['8084', new Date('6/30/14'), new Date('7/30/14')],
['7196', new Date('7/1/14'), new Date('7/31/14')],
['711', new Date('7/2/14'), new Date('8/1/14')],
['3443', new Date('7/3/14'), new Date('8/2/14')],
['5904', new Date('7/4/14'), new Date('8/3/14')],
['7259', new Date('7/5/14'), new Date('8/4/14')],
['563', new Date('7/6/14'), new Date('8/5/14')],
['3276', new Date('7/7/14'), new Date('8/6/14')],
['581', new Date('7/8/14'), new Date('8/7/14')],
['953', new Date('7/9/14'), new Date('8/8/14')],
['5595', new Date('7/10/14'), new Date('8/9/14')],
['801', new Date('7/11/14'), new Date('8/10/14')],
['7070', new Date('7/12/14'), new Date('8/11/14')],
['1260', new Date('7/13/14'), new Date('8/12/14')],
['6227', new Date('7/14/14'), new Date('8/13/14')],
['6996', new Date('7/15/14'), new Date('8/14/14')],
['7615', new Date('7/16/14'), new Date('8/15/14')],
['4064', new Date('7/17/14'), new Date('8/16/14')],
['9311', new Date('7/18/14'), new Date('8/17/14')],
['3558', new Date('7/19/14'), new Date('8/18/14')],
['5736', new Date('7/20/14'), new Date('8/19/14')],
['1966', new Date('7/21/14'), new Date('8/20/14')],
['6121', new Date('7/22/14'), new Date('8/21/14')],
['5069', new Date('7/23/14'), new Date('8/22/14')],
['4763', new Date('7/24/14'), new Date('8/23/14')],
['2079', new Date('7/25/14'), new Date('8/24/14')],
['3634', new Date('7/26/14'), new Date('8/25/14')],
['5541', new Date('7/27/14'), new Date('8/26/14')],
['6469', new Date('7/28/14'), new Date('8/27/14')],
['9905', new Date('7/29/14'), new Date('8/28/14')],
['3631', new Date('7/30/14'), new Date('8/29/14')],
['6315', new Date('7/31/14'), new Date('8/30/14')],
['3308', new Date('8/1/14'), new Date('8/31/14')],
['8378', new Date('8/2/14'), new Date('9/1/14')],
['978', new Date('8/3/14'), new Date('9/2/14')],
['2784', new Date('8/4/14'), new Date('9/3/14')],
['1494', new Date('8/5/14'), new Date('9/4/14')],
['8712', new Date('8/6/14'), new Date('9/5/14')],
['1212', new Date('8/7/14'), new Date('9/6/14')],
['9733', new Date('8/8/14'), new Date('9/7/14')],
['8287', new Date('8/9/14'), new Date('9/8/14')],
['407', new Date('8/10/14'), new Date('9/9/14')],
['7596', new Date('8/11/14'), new Date('9/10/14')],
['2727', new Date('8/12/14'), new Date('9/11/14')],
['3014', new Date('8/13/14'), new Date('9/12/14')],
['9843', new Date('8/14/14'), new Date('9/13/14')],
['8806', new Date('8/15/14'), new Date('9/14/14')],
['8717', new Date('8/16/14'), new Date('9/15/14')],
['2920', new Date('8/17/14'), new Date('9/16/14')],
['707', new Date('8/18/14'), new Date('9/17/14')],
['5579', new Date('8/19/14'), new Date('9/18/14')],
['3764', new Date('8/20/14'), new Date('9/19/14')],
['6878', new Date('8/21/14'), new Date('9/20/14')],
['4622', new Date('8/22/14'), new Date('9/21/14')],
['519', new Date('8/23/14'), new Date('9/22/14')],
['370', new Date('8/24/14'), new Date('9/23/14')],
['4524', new Date('8/25/14'), new Date('9/24/14')],
['697', new Date('8/26/14'), new Date('9/25/14')],
['5390', new Date('8/27/14'), new Date('9/26/14')],
['9933', new Date('8/28/14'), new Date('9/27/14')],
['8107', new Date('8/29/14'), new Date('9/28/14')],
['6974', new Date('8/30/14'), new Date('9/29/14')],
['4923', new Date('8/31/14'), new Date('9/30/14')],
['2091', new Date('9/1/14'), new Date('10/1/14')],
['5781', new Date('9/2/14'), new Date('10/2/14')],
['2812', new Date('9/3/14'), new Date('10/3/14')],
['8629', new Date('9/4/14'), new Date('10/4/14')],
['3804', new Date('9/5/14'), new Date('10/5/14')],
['7959', new Date('9/6/14'), new Date('10/6/14')],
['3435', new Date('9/7/14'), new Date('10/7/14')],
['2680', new Date('9/8/14'), new Date('10/8/14')],
['6310', new Date('9/9/14'), new Date('10/9/14')],
['6552', new Date('9/10/14'), new Date('10/10/14')],
['2392', new Date('9/11/14'), new Date('10/11/14')],
['1432', new Date('9/12/14'), new Date('10/12/14')],
['3969', new Date('9/13/14'), new Date('10/13/14')],
['2632', new Date('9/14/14'), new Date('10/14/14')],
['1703', new Date('9/15/14'), new Date('10/15/14')],
['9891', new Date('9/16/14'), new Date('10/16/14')],
['3855', new Date('9/17/14'), new Date('10/17/14')],
['5201', new Date('9/18/14'), new Date('10/18/14')],
['8491', new Date('9/19/14'), new Date('10/19/14')],
['3101', new Date('9/20/14'), new Date('10/20/14')],
['6481', new Date('9/21/14'), new Date('10/21/14')],
['1992', new Date('9/22/14'), new Date('10/22/14')],
['5845', new Date('9/23/14'), new Date('10/23/14')],
['54', new Date('9/24/14'), new Date('10/24/14')],
['2121', new Date('9/25/14'), new Date('10/25/14')],
];
var givenDate = new Date('10/01/2013');
var expectedResult = ['7461','5518','2475','4414','529','3228','3064','1081','8872','1931','8061','2052','2048','7991','5167','9555','7337','7056','1898','6968','2981','7887','4811','7122','8589','2213','6942','5601','9034','1791','5379'];

var actual = findRunningCampaigns(input, givenDate);
if(arraysEqual(actual, expectedResult)){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult);
  console.log('But was:');
  console.log(actual);
}
var givenDate2 = new Date('10/23/2014');
var actual2 = findRunningCampaigns(input, givenDate2);

var expectedResult2 = ['5845', '54', '2121'];
if(arraysEqual(actual2, expectedResult2)){
  console.log('Success!');
} else{
  console.log('FailSauce!');
  console.log('Expected:');
  console.log(expectedResult2);
  console.log('But was:');
  console.log(actual2);
}

function arraysEqual(arr1, arr2) {
    if(arr1 == null || arr2 == null
      || Object.prototype.toString.call( arr1 ) !== '[object Array]'
      || Object.prototype.toString.call( arr2 ) !== '[object Array]'
      || arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function findRunningCampaigns(input, targetDate){
  //TODO: Implement here
}
