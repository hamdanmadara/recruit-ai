import { useNavigate } from 'react-router-dom';
import { Upload } from 'lucide-react';
import AppLayout from '../components/layout/AppLayout';
import Card from '../components/ui/Card';
import Input, { TextArea } from '../components/ui/Input';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import './CreatePosition.css';

export default function CreatePosition() {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="page-header">
        <div className="page-header-left">
          <h1 className="page-title">Create New Position</h1>
          <p className="page-subtitle">
            Add a job position and upload candidate resumes
          </p>
        </div>
      </div>

      <Card
        title="Position Details"
        description="Enter the basic information about this job opening"
        className="create-card"
      >
        <div className="form-row">
          <Input label="Position Title" placeholder="e.g. Senior Frontend Developer" />
        </div>
        <TextArea
          label="Job Description"
          placeholder="Describe the role, responsibilities, and requirements..."
          rows={4}
        />
      </Card>

      <Card
        title="Upload Resumes"
        description="Upload candidate resumes in bulk. Our AI will parse and index them automatically."
        className="create-card"
      >
        <div className="upload-zone">
          <div className="upload-icon">
            <Upload size={24} />
          </div>
          <p className="upload-title">Drag & drop resume files here</p>
          <p className="upload-sub">or click to browse from your computer</p>
          <div className="upload-formats">
            <Badge variant="format">.pdf</Badge>
            <Badge variant="format">.docx</Badge>
            <Badge variant="format">.doc</Badge>
            <Badge variant="format">.zip</Badge>
          </div>
        </div>
      </Card>

      <div className="form-actions">
        <Button variant="secondary" onClick={() => navigate('/positions')}>
          Cancel
        </Button>
        <Button variant="primary">Create Position & Start Parsing</Button>
      </div>
    </AppLayout>
  );
}
