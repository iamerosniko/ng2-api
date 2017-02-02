using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Net.Http.Headers;
using System.Web;
using System.Diagnostics;

namespace ng2_api.Controllers
{
    public class DownloadController : ApiController
    {
        // GET api/download
        public HttpResponseMessage Get(string filename)
        {
            //server's shared folder / upload repo
            var path = HttpContext.Current.Server.MapPath("~/upload");

            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            //reads the path and the file
            try {
                var stream = new FileStream(path + "/" + @filename, FileMode.Open);
                result.Content = new StreamContent(stream);
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
                //@filename = original name inside the repo
                result.Content.Headers.ContentDisposition.FileName = @filename;
                return result;
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);
            }
        }

        public IEnumerable<string> Get()
        {
            //filepaths : this is the server's shared folder / upload repo
            string[] filePaths = Directory.GetFiles(HttpContext.Current.Server.MapPath("~/upload"));
            List<String> files = new List<String>();

            foreach (string filePath in filePaths)
            {
                //TRACING : Get all file names in path
                //Trace.WriteLine(Path.GetFileName(filePath));
                files.Add(Path.GetFileName(filePath));
            }
            return files;
        }
    }
}
