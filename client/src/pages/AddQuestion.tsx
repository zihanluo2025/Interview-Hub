import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

interface QuestionFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    questionEn: string;
    questionZh?: string;
    answerEn?: string;
    answerZh?: string;
  }) => void;
  mode?: 'add' | 'edit';
  initialData?: {
    questionEn: string;
    questionZh?: string;
    answerEn?: string;
    answerZh?: string;
  };
}

export default function QuestionFormDialog({
  open,
  onClose,
  onSubmit,
  mode = 'add',
  initialData,
}: QuestionFormDialogProps) {
  const [form, setForm] = React.useState({
    questionEn: '',
    questionZh: '',
    answerEn: '',
    answerZh: '',
  });

  // 预填内容（仅第一次 open 时初始化）
  React.useEffect(() => {
    if (initialData) {
      setForm({
        questionEn: initialData.questionEn || '',
        questionZh: initialData.questionZh || '',
        answerEn: initialData.answerEn || '',
        answerZh: initialData.answerZh || '',
      });
    } else {
      setForm({ questionEn: '', questionZh: '', answerEn: '', answerZh: '' });
    }
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.questionEn.trim()) {
      alert('英文问题是必填项');
      return;
    }
    onSubmit(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>
          {mode === 'edit' ? '编辑题目' : '添加题目'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            name="questionEn"
            label="Question (English)"
            fullWidth
            variant="standard"
            value={form.questionEn}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="questionZh"
            label="问题（中文）"
            fullWidth
            variant="standard"
            value={form.questionZh}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="answerEn"
            label="Answer (English)"
            fullWidth
            variant="standard"
            value={form.answerEn}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="answerZh"
            label="答案（中文）"
            fullWidth
            variant="standard"
            value={form.answerZh}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>取消</Button>
          <Button type="submit" variant="contained">
            {mode === 'edit' ? '保存' : '提交'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
