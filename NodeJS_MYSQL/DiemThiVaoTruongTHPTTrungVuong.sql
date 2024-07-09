CREATE DATABASE DiemThiVaoTruongTHPTTrungVuong

USE DiemThiVaoTruongTHPTTrungVuong

CREATE TABLE HocSinh(
  SBD int CONSTRAINT pk_SBD PRIMARY KEY,
  hoTen nvarchar(50),
  ngaySinh date,
  gioiTinh nvarchar(5),
  truongTHCSDangHoc nvarchar(100),
  nguyenVong1 nvarchar(100),
  nguyenVong2 nvarchar(100) NULL
)

CREATE TABLE MonThi(
  MaMon int CONSTRAINT pk_MaMon PRIMARY KEY,
  tenMon nvarchar(15)
)

CREATE TABLE DiemThi(
  MaDiem int CONSTRAINT pk_MaDiem PRIMARY KEY IDENTITY(1,1),
  maHocSinh int constraint fk_maHocSinh FOREIGN KEY REFERENCES HocSinh(SBD) on delete cascade on update cascade,
  maMonThi int constraint fk_maMonThi FOREIGN KEY REFERENCES MonThi(MaMon) on delete cascade on update cascade,
  diemThi float
)

/*Thêm dữ liệu vào các bảng*/
/*Bảng Học Sinh*/
INSERT INTO HocSinh VALUES(040009, N'Dương Phan Bảo An', '2009-03-02', N'Nữ', N'Trần Hưng Đạo', N'THPT Trưng Vương', '');
INSERT INTO HocSinh VALUES(040048, N'Nguyễn Trần Duy Anh', '2009-05-24', N'Nam', N'Lê Hồng Phong', N'THPT Trưng Vương', N'Quốc học Quy Nhơn');
INSERT INTO HocSinh VALUES(040099, N'Nguyễn Thị Ngọc Bảo', '2009-02-21', N'Nữ', N'Trần Hưng Đạo', N'THPT Trưng Vương', '');
INSERT INTO HocSinh VALUES(040121, N'Bùi Võ Linh Chi', '2009-11-04', N'Nữ', N'Ghềnh Ráng', N'THPT Trưng Vương', '');
INSERT INTO HocSinh VALUES(040203, N'Phạm Khoa Đàm', '2009-06-21', N'Nam', N'Lương Thế Vinh', N'THPT Trưng Vương', N'Quốc học Quy Nhơn');

/*Bảng Môn Thi*/
INSERT INTO MonThi VALUES(1, N'Ngữ Văn');
INSERT INTO MonThi VALUES(2, N'Tiếng Anh');
INSERT INTO MonThi VALUES(3, N'Toán');

/*Bảng Điểm Thi*/
/*Dương Phan Bảo An*/
INSERT INTO DiemThi VALUES(040009, 1, 6.00);
INSERT INTO DiemThi VALUES(040009, 2, 5.25);
INSERT INTO DiemThi VALUES(040009, 3, 3.25);

/*Nguyễn Trần Duy Anh*/
INSERT INTO DiemThi VALUES(040048, 1, 7.25);
INSERT INTO DiemThi VALUES(040048, 2, 7.75);
INSERT INTO DiemThi VALUES(040048, 3, 6.00);

/*Nguyễn Thị Ngọc Bảo*/
INSERT INTO DiemThi VALUES(040099, 1, 5.50);
INSERT INTO DiemThi VALUES(040099, 2, 7.50);
INSERT INTO DiemThi VALUES(040099, 3, 4.50);

/*Bùi Võ Linh Chi*/
INSERT INTO DiemThi VALUES(040121, 1, 7.25);
INSERT INTO DiemThi VALUES(040121, 2, 5.75);
INSERT INTO DiemThi VALUES(040121, 3, 6.50);

/*Phạm Khoa Đàm*/
INSERT INTO DiemThi VALUES(040203, 1, 6.25);
INSERT INTO DiemThi VALUES(040203, 2, 7.25);
INSERT INTO DiemThi VALUES(040203, 3, 6.25);

SELECT * FROM HocSinh
SELECT * FROM DiemThi








