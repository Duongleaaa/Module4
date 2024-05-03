import React from 'react'
import ButtonHw9 from './ButtonHw9'
export default function Hw9() {
  return (
    <>
        <h2>Bài 9:</h2>
        <table style={{
            width:'100%',
    
        }}>
            <tr style={{
                color:'gray',
            }}>
                <td style={{padding:'20px'}}>STT</td>
                <td style={{padding:'20px'}}>Họ và tên</td>
                <td style={{padding:'20px'}}>Ngày sinh</td>
                <td style={{padding:'20px'}}>Giới tính</td>
                <td style={{padding:'20px'}}>Địa chỉ</td>
                <td style={{padding:'20px'}}>Hành động</td>
            </tr>
            <tr style={{
                color:'gray',
            }}>
                <td style={{padding:'20px'}}>1</td>
                <td style={{padding:'20px'}}>Nguyên Văn</td>
                <td style={{padding:'20px'}}>12/12/2003</td>
                <td style={{padding:'20px'}}>Nữ</td>
                <td style={{padding:'20px'}}>Hà Tây</td>
                <td style={{padding:'20px'}}> <ButtonHw9></ButtonHw9></td>
            </tr>
            <tr style={{
                color:'gray',
            }}>
                <td style={{padding:'20px'}}>2</td>
                <td style={{padding:'20px'}}>Nguyễn Thị</td>
                <td style={{padding:'20px'}}>12/12/2003</td>
                <td style={{padding:'20px'}}>Nữ</td>
                <td style={{padding:'20px'}}>Hà Đông</td>
                <td style={{padding:'20px'}}> <ButtonHw9></ButtonHw9></td>
            </tr>
        </table>
    </>
  )
}
