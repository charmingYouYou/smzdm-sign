/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '852668464@qq.com';
// email 登陆密码
const emailPassword = 'ypyglwibbulsbbfc';
// 接收者 邮箱
const toEmail = '852668464@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': 'charmingyouyou',
		'phone': '18834833439',
		'cookies': '__ckguid=Sy33OTPCNsqXqbIyOk4qwU4; device_id=18752620021561004418121497234daa955ba26f1a6976881316f04685; __jsluid=88693de468d3407f71d8d44633ea9e6a; _ga=GA1.2.635261795.1561004416; __gads=ID=88322e8f7a2294d3:T=1561004419:S=ALNI_MZATZ7dKw7oSA2qSNs1BMM5PnlVvA; smzdm_user_source=07FC9D710D5E3C72237E2A8DABF4FB6E; __jsluid_s=0eac84ed28a7b93e4fb2829c07f5160a; userId=user:3144653715|3144653715; homepage_sug=f; r_sort_type=score; PHPSESSID=063f5a1a9a727c91f63e755e3e837d43; wt3_eid=%3B999768690672041%7C2156265283200484981%232156880397500713436; wt3_sid=%3B999768690672041; sess=YWQ5ZjV8MTU3Mjg1ODMwNnwzMTQ0NjUzNzE1fDFhYWI3Y2U1NzE5NzRlZjNjNmI0MzYwNTM0YjA1ODdl; user=user%3A3144653715%7C3144653715; smzdm_id=3144653715; _zdmA.uid=ZDMA.xB3JkiUgJ.1569386003.2419200; _zdmA.vid=*; zdm_qd=%7B%22referrer%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%7D; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1568282707,1568803974,1568970259,1569386003; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1569386003; _gid=GA1.2.820612957.1569386003; _gat_UA-27058866-1=1; ad_date=25; bannerCounter=%5B%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%5D; ad_json_feed=%7B%22J_feed_ad1%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%22J_feed_ad4%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%7D; amvid=a61ada4185abffcbe57adba7855df082; _zdmA.time=1569386009146.0.https%3A%2F%2Fwww.smzdm.com%2F'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'东西怎么样啊, 有用过的来说下吗?',
	'来个用过的说下东西怎么样啊',
	'看起来还不错啊',
	'这个价格算是低价吗?'
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
