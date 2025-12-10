
export const getAllTasks = (req, res) => {
  res.status(200).send('Xe vờ đang chạy!');
}

export const createTask = (req, res) => {
  res.status(201).json({ message: 'Đã thêm một nhiệm vụ mới thành công!' });
}

export const deleteTask = (req, res) => {
  res.status(200).json({ message: 'Đã xóa nhiệm vụ thành công!' });
}   

export const updateTask = (req, res) => {
  res.status(200).json({ message: 'Đã cập nhật nhiệm vụ thành công!' });
}