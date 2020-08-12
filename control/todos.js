const connection = require("../mysql_connection");

// @desc     todo 불러오기
// @url      GET/api/v1/todo?offset=
// @request
// @response
exports.getTodo = async (req, res, next) => {
  let offset = req.query.offset;
  let query = `select * from todo limit ${offset},25`;
  try {
    [rows] = await connection.query(query);
    let cnt = rows.length;
    res.status(200).json({ success: true, todo: rows, count: cnt });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};

// 업데이트
exports.updateCompleted = async (req, res, next) => {
  let id = req.body.id;
  let completed = req.body.completed;
  let query = `update todo set completed = ${completed} where id = ${id}`;

  try {
    [result] = await connection.query(query);
    res.status(200).json({ success: true, result: result });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
