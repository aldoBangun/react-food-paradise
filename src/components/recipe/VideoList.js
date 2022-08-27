import { Play } from 'react-bootstrap-icons'
import { Button } from 'react-bootstrap'

const VideoList = ({ videos = [] }) => {
  return (
    <div className="mb-5">
      <h4 className="mb-3">Video Step</h4>
      {videos?.length ? (
        <>
          {videos.map((_item, index) => (
            <Button variant="warning" key={index} style={{ width: 160 }}>
              <div className="p-1 d-flex align-items-center justify-content-center">
                <Play size={24} color="white" />
              </div>
            </Button>
          ))}
        </>
      ) : (
        <p className="text-secondary">No videos.</p>
      )}
    </div>
  )
}

export default VideoList
