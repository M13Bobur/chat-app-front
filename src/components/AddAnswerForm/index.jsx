import { Button, Input } from 'antd';
import FileUpload from 'components/FormElements/FileUpload';
import React, { useState } from 'react';
import { Box, Card, Form } from './style';
const { TextArea } = Input;

export default ({ close, submitForm, id }) => {
  const [description, setDescription] = useState('');
  const [fileList, setFileList] = useState([]);
  const imageProps = { fileList, setFileList };

  return (
    <Box>
      <Card>
        <Form>
          <div
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <h3>Изоҳ</h3>

            <TextArea
              autoSize={{
                minRows: 6,
                maxRows: 10,
              }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              defaultValue={description}
              placeholder='Please write your answer...'
            />
          </div>
          <div>
            <h3>Файл юклаш</h3>
            <FileUpload imageProps={imageProps} />
          </div>
        </Form>
        <div className='footer__buttons'>
          <Button
            onClick={close}
            size='large'
            className='footer__button'
            danger
          >
            Бекор қилиш
          </Button>
          <Button
            onClick={() => submitForm(id, description, fileList)}
            size='large'
            className='footer__button'
            disabled={
              !description.length > 0 || (fileList.length === 0 && true)
            }
          >
            Сақлаш
          </Button>
        </div>
      </Card>
    </Box>
  );
};
