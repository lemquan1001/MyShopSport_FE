export const ListFurniture = [
  {
    title: 'TRANG CHỦ',
    routerLink: '/',
    submenu: [],
  },
  {
    title: 'QUẦN ÁO BÓNG ĐÁ',
    submenu: [
      { code: 'trang_phuc_the_thao', name: 'Không Logo', id: 4 },
      { code: 'trang_phuc_da_bong', name: 'Câu lạc bộ', id: 1 },
      { code: 'trang_phuc_da_bong', name: 'Đội tuyển quốc gia', id: 7 },
    ],
  },
  {
    title: 'ÁO KHOÁC/BỘ ĐỒ',
    submenu: [
      { code: 'giay_the_thao', name: 'Không Logo', id: 5 },
      { code: 'giay_bong_da', name: 'Câu lạc bộ', id: 3 },
      { code: 'giay_bong_da', name: 'Đội tuyển quốc qia', id: 8 },
    ],
  },
  {
    title: 'BÓNG CHUYỀN/BÓNG RỔ',
    submenu: [
      { code: 'pktt', name: 'Bóng chuyền ba lỗ', id: 9 },
      { code: 'pktt', name: 'Bóng chuyền cọc tay', id: 10 },
      { code: 'pktt', name: 'Bóng rổ', id: 11 },
    ],
  },
  {
    title: 'KHÁC',
    submenu: [
      { code: 'pktt', name: 'Đồ giữ nhiệt', id: 6 },
      { code: 'pktt', name: 'Thể thao trẻ em', id: 12 },
    ],
  },
  {
    title: 'LIÊN HỆ',
    routerLink: '/contact',
    submenu: [],
  },
];
