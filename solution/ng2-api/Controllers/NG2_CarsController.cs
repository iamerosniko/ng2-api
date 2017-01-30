﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ng2_api.Models;

namespace ng2_api.Controllers
{
    public class NG2_CarsController : ApiController
    {
        private NG2Context db = new NG2Context();

        // GET: api/NG2_Cars
        public IQueryable<NG2_Cars> GetNG2_Cars()
        {
            return db.NG2_Cars;
        }

        // GET: api/NG2_Cars/5
        [ResponseType(typeof(NG2_Cars))]
        public async Task<IHttpActionResult> GetNG2_Cars(int id)
        {
            NG2_Cars nG2_Cars = await db.NG2_Cars.FindAsync(id);
            if (nG2_Cars == null)
            {
                return NotFound();
            }

            return Ok(nG2_Cars);
        }

        // PUT: api/NG2_Cars/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNG2_Cars(int id, NG2_Cars nG2_Cars)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nG2_Cars.id)
            {
                return BadRequest();
            }

            db.Entry(nG2_Cars).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NG2_CarsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/NG2_Cars
        [ResponseType(typeof(NG2_Cars))]
        public async Task<IHttpActionResult> PostNG2_Cars(NG2_Cars nG2_Cars)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NG2_Cars.Add(nG2_Cars);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nG2_Cars.id }, nG2_Cars);
        }

        // DELETE: api/NG2_Cars/5
        [ResponseType(typeof(NG2_Cars))]
        public async Task<IHttpActionResult> DeleteNG2_Cars(int id)
        {
            NG2_Cars nG2_Cars = await db.NG2_Cars.FindAsync(id);
            if (nG2_Cars == null)
            {
                return NotFound();
            }

            db.NG2_Cars.Remove(nG2_Cars);
            await db.SaveChangesAsync();

            return Ok(nG2_Cars);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NG2_CarsExists(int id)
        {
            return db.NG2_Cars.Count(e => e.id == id) > 0;
        }
    }
}