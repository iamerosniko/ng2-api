using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Web;
using ng2_api.Models;
using System.Web.Mvc;
using System.Threading.Tasks;
using System;
using System.Net;
using System.Net.Http.Headers;

namespace ng2_api.Controllers
{
    public class DownloadController : ApiController
    {
        // GET api/download/Value
        //public HttpResponseMessage Get(string filename)
        //{
        //    //server's shared folder / upload repo
        //    var path = HttpContext.Current.Server.MapPath("~/upload");

        //    HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
        //    //reads the path and the file
        //    try
        //    {
        //        var stream = new FileStream(path + "/" + @filename, FileMode.Open);
        //        result.Content = new StreamContent(stream);
        //        result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
        //        result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
        //        //@filename = original name inside the repo
        //        result.Content.Headers.ContentDisposition.FileName = @filename;
        //        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result.Content);
        //        return result;

        //    }
        //    catch
        //    {
        //        return new HttpResponseMessage(HttpStatusCode.NotFound);
        //    }
        //}

        public HttpResponseMessage Get(string filename)
        {
            //server's shared folder / upload repo
            var path = HttpContext.Current.Server.MapPath("~/upload");

            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            //reads the path and the file
            try
            {
                var stream = new FileStream(path + "/" + @filename, FileMode.Open);
                result.Content = new StreamContent(stream);
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                //@filename = original name inside the repo
                result.Content.Headers.ContentDisposition.FileName = @filename;
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result.Content);
                return result;
                
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);
            }
        }

        //GET api/download
        public IEnumerable<FileModel> Get()
        {
            //filepaths : this is the server's shared folder / upload repo
            string[] filePaths = Directory.GetFiles(HttpContext.Current.Server.MapPath("~/upload"));
            List<FileModel> files = new List<FileModel>();

            foreach (string filePath in filePaths)
            {
                FileModel fm = new FileModel();
                fm.filename=Path.GetFileName(filePath);

                fm.filepath=Path.GetDirectoryName(filePath);
                //TRACING : Get all file names in path
                //Trace.WriteLine(Path.GetFileName(filePath));
                files.Add(fm);
            }
            return files;
        }
    }
}
